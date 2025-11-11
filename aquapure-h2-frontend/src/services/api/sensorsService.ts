// Servicio específico para gestión de Sensores

import * as fiwareService from './fiwareService';
import type { Sensor, CreateSensorPayload, UpdateSensorPayload } from '../../types/sensor.types';
import { ENTITY_TYPES } from '../utils/constants';

/**
 * Obtiene todos los sensores
 */
export const getAllSensors = async (): Promise<Sensor[]> => {
  return fiwareService.getEntitiesByType(ENTITY_TYPES.SENSOR);
};

/**
 * Obtiene un sensor por ID
 */
export const getSensorById = async (sensorId: string): Promise<Sensor> => {
  return fiwareService.getEntity(sensorId);
};

/**
 * Crea un nuevo sensor
 */
export const createSensor = async (sensorData: {
  name: string;
  location?: string;
  initialStatus?: string;
}): Promise<void> => {
  const newSensor: CreateSensorPayload = {
    id: `Sensor:${Date.now()}`,
    type: ENTITY_TYPES.SENSOR,
    name: sensorData.name,
    attributes: {
      waterPurity: {
        type: 'Number',
        value: 0,
        metadata: {
          unit: 'percentage'
        }
      },
      temperature: {
        type: 'Number',
        value: 0,
        metadata: {
          unit: 'celsius'
        }
      },
      flowRate: {
        type: 'Number',
        value: 0,
        metadata: {
          unit: 'L/min'
        }
      },
      pressure: {
        type: 'Number',
        value: 0,
        metadata: {
          unit: 'bar'
        }
      },
      pH: {
        type: 'Number',
        value: 7.0
      },
      status: {
        type: 'Text',
        value: sensorData.initialStatus || 'inactive'
      },
      ...(sensorData.location && {
        location: {
          type: 'geo:point',
          value: sensorData.location
        }
      }),
      createdAt: {
        type: 'DateTime',
        value: new Date().toISOString()
      }
    }
  };
  
  await fiwareService.createEntity(newSensor);
};

/**
 * Actualiza un sensor existente
 */
export const updateSensor = async (
  sensorId: string,
  updates: Partial<{
    name: string;
    waterPurity: number;
    temperature: number;
    flowRate: number;
    pressure: number;
    pH: number;
    status: string;
    location: string;
  }>
): Promise<void> => {
  const attributes: UpdateSensorPayload = {};
  
  if (updates.name !== undefined) {
    attributes.name = { type: 'Text', value: updates.name };
  }
  if (updates.waterPurity !== undefined) {
    attributes.waterPurity = {
      type: 'Number',
      value: updates.waterPurity,
      metadata: { unit: 'percentage', timestamp: new Date().toISOString() }
    };
  }
  if (updates.temperature !== undefined) {
    attributes.temperature = {
      type: 'Number',
      value: updates.temperature,
      metadata: { unit: 'celsius', timestamp: new Date().toISOString() }
    };
  }
  if (updates.flowRate !== undefined) {
    attributes.flowRate = {
      type: 'Number',
      value: updates.flowRate,
      metadata: { unit: 'L/min', timestamp: new Date().toISOString() }
    };
  }
  if (updates.pressure !== undefined) {
    attributes.pressure = {
      type: 'Number',
      value: updates.pressure,
      metadata: { unit: 'bar', timestamp: new Date().toISOString() }
    };
  }
  if (updates.pH !== undefined) {
    attributes.pH = { type: 'Number', value: updates.pH };
  }
  if (updates.status !== undefined) {
    attributes.status = { type: 'Text', value: updates.status };
  }
  if (updates.location !== undefined) {
    attributes.location = { type: 'geo:point', value: updates.location };
  }
  
  await fiwareService.updateEntityAttributes(sensorId, attributes);
};

/**
 * Elimina un sensor
 */
export const deleteSensor = async (sensorId: string): Promise<void> => {
  await fiwareService.deleteEntity(sensorId);
};

/**
 * Obtiene solo sensores activos
 */
export const getActiveSensors = async (): Promise<Sensor[]> => {
  return fiwareService.getActiveSensors();
};

/**
 * Cambia el estado de un sensor
 */
export const changeSensorStatus = async (
  sensorId: string,
  newStatus: 'active' | 'inactive' | 'maintenance' | 'error'
): Promise<void> => {
  await updateSensor(sensorId, { status: newStatus });
};

/**
 * Obtiene el historial de lecturas de un sensor
 * NOTA: Esto requeriría un backend adicional o STH-Comet de Fiware
 */
export const getSensorHistory = async (
  sensorId: string,
  attribute: string,
  startDate?: Date,
  endDate?: Date
): Promise<Array<{ timestamp: string; value: number }>> => {
  // Mock: En producción, esto vendría de STH-Comet o un servicio de historial
  console.log('getSensorHistory mock:', { sensorId, attribute, startDate, endDate });
  
  // Generar datos mock
  const now = new Date();
  const mockData = Array.from({ length: 24 }, (_, i) => ({
    timestamp: new Date(now.getTime() - (23 - i) * 3600000).toISOString(),
    value: Math.random() * 100
  }));
  
  return mockData;
};

export default {
  getAllSensors,
  getSensorById,
  createSensor,
  updateSensor,
  deleteSensor,
  getActiveSensors,
  changeSensorStatus,
  getSensorHistory,
};
