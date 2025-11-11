// Servicio para interactuar con Fiware Orion Context Broker

import { fiwareClient } from './axiosConfig';
import type { Sensor, CreateSensorPayload, UpdateSensorPayload } from '../../types/sensor.types';
import type { QueryOptions, Subscription } from '../../types/api.types';

/**
 * Obtiene todas las entidades de un tipo específico
 */
export const getEntitiesByType = async (type: string): Promise<Sensor[]> => {
  const response = await fiwareClient.get('/entities', {
    params: { type, options: 'keyValues' }
  });
  return response.data;
};

/**
 * Obtiene una entidad específica por ID
 */
export const getEntity = async (entityId: string): Promise<Sensor> => {
  const response = await fiwareClient.get(`/entities/${entityId}`);
  return response.data;
};

/**
 * Obtiene un atributo específico de una entidad
 */
export const getEntityAttribute = async (
  entityId: string,
  attributeName: string
): Promise<any> => {
  const response = await fiwareClient.get(
    `/entities/${entityId}/attrs/${attributeName}/value`
  );
  return response.data;
};

/**
 * Crea una nueva entidad
 */
export const createEntity = async (entity: CreateSensorPayload): Promise<void> => {
  await fiwareClient.post('/entities', entity);
};

/**
 * Actualiza atributos de una entidad existente
 */
export const updateEntityAttributes = async (
  entityId: string,
  attributes: UpdateSensorPayload
): Promise<void> => {
  await fiwareClient.patch(`/entities/${entityId}/attrs`, attributes);
};

/**
 * Actualiza un atributo específico de una entidad
 */
export const updateEntityAttribute = async (
  entityId: string,
  attributeName: string,
  value: any
): Promise<void> => {
  await fiwareClient.put(
    `/entities/${entityId}/attrs/${attributeName}/value`,
    value,
    {
      headers: { 'Content-Type': 'text/plain' }
    }
  );
};

/**
 * Elimina una entidad
 */
export const deleteEntity = async (entityId: string): Promise<void> => {
  await fiwareClient.delete(`/entities/${entityId}`);
};

/**
 * Realiza una consulta avanzada
 */
export const queryEntities = async (queryOptions: QueryOptions): Promise<Sensor[]> => {
  const response = await fiwareClient.get('/entities', {
    params: {
      ...queryOptions,
      options: 'keyValues'
    }
  });
  return response.data;
};

/**
 * Crea una subscripción para recibir notificaciones
 */
export const createSubscription = async (
  subscription: Subscription
): Promise<{ id: string }> => {
  const response = await fiwareClient.post('/subscriptions', subscription);
  return { id: response.headers['location']?.split('/').pop() || '' };
};

/**
 * Obtiene todas las subscripciones
 */
export const getSubscriptions = async (): Promise<Subscription[]> => {
  const response = await fiwareClient.get('/subscriptions');
  return response.data;
};

/**
 * Elimina una subscripción
 */
export const deleteSubscription = async (subscriptionId: string): Promise<void> => {
  await fiwareClient.delete(`/subscriptions/${subscriptionId}`);
};

/**
 * Obtiene el valor de pureza del agua en tiempo real
 */
export const getWaterPurityValue = async (sensorId: string): Promise<number> => {
  try {
    const value = await getEntityAttribute(sensorId, 'waterPurity');
    return typeof value === 'number' ? value : parseFloat(value);
  } catch (error) {
    console.error('Error al obtener pureza del agua:', error);
    throw error;
  }
};

/**
 * Obtiene todos los sensores activos
 */
export const getActiveSensors = async (): Promise<Sensor[]> => {
  return queryEntities({
    type: 'WaterPuritySensor',
    q: 'status==active'
  });
};

/**
 * Obtiene métricas de múltiples sensores
 */
export const getSensorMetrics = async (sensorIds: string[]): Promise<Record<string, any>> => {
  const metrics: Record<string, any> = {};
  
  for (const sensorId of sensorIds) {
    try {
      const entity = await getEntity(sensorId);
      metrics[sensorId] = {
        waterPurity: entity.waterPurity?.value,
        temperature: entity.temperature?.value,
        flowRate: entity.flowRate?.value,
        status: entity.status?.value,
      };
    } catch (error) {
      console.error(`Error al obtener métricas del sensor ${sensorId}:`, error);
      metrics[sensorId] = null;
    }
  }
  
  return metrics;
};

/**
 * Busca entidades por patrón de ID
 */
export const searchEntitiesByPattern = async (
  idPattern: string,
  type?: string
): Promise<Sensor[]> => {
  const params: any = { idPattern, options: 'keyValues' };
  if (type) params.type = type;
  
  const response = await fiwareClient.get('/entities', { params });
  return response.data;
};

export default {
  getEntitiesByType,
  getEntity,
  getEntityAttribute,
  createEntity,
  updateEntityAttributes,
  updateEntityAttribute,
  deleteEntity,
  queryEntities,
  createSubscription,
  getSubscriptions,
  deleteSubscription,
  getWaterPurityValue,
  getActiveSensors,
  getSensorMetrics,
  searchEntitiesByPattern,
};
