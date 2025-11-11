// Hook para interactuar con Fiware Orion

import { useState, useCallback } from 'react';
import * as fiwareService from '../services/api/fiwareService';
import type { Sensor, CreateSensorPayload, UpdateSensorPayload } from '../types/sensor.types';
import type { QueryOptions } from '../types/api.types';

interface UseFiwareReturn {
  loading: boolean;
  error: Error | null;
  getEntity: (entityId: string) => Promise<Sensor | null>;
  getEntitiesByType: (type: string) => Promise<Sensor[]>;
  createEntity: (entity: CreateSensorPayload) => Promise<void>;
  updateEntity: (entityId: string, attributes: UpdateSensorPayload) => Promise<void>;
  deleteEntity: (entityId: string) => Promise<void>;
  queryEntities: (options: QueryOptions) => Promise<Sensor[]>;
}

/**
 * Hook personalizado para interactuar con Fiware Orion
 */
export function useFiware(): UseFiwareReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getEntity = useCallback(async (entityId: string): Promise<Sensor | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const entity = await fiwareService.getEntity(entityId);
      return entity;
    } catch (err) {
      setError(err as Error);
      console.error('Error al obtener entidad:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const getEntitiesByType = useCallback(async (type: string): Promise<Sensor[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const entities = await fiwareService.getEntitiesByType(type);
      return entities;
    } catch (err) {
      setError(err as Error);
      console.error('Error al obtener entidades:', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const createEntity = useCallback(async (entity: CreateSensorPayload): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      await fiwareService.createEntity(entity);
    } catch (err) {
      setError(err as Error);
      console.error('Error al crear entidad:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateEntity = useCallback(async (
    entityId: string,
    attributes: UpdateSensorPayload
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      await fiwareService.updateEntityAttributes(entityId, attributes);
    } catch (err) {
      setError(err as Error);
      console.error('Error al actualizar entidad:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteEntity = useCallback(async (entityId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      await fiwareService.deleteEntity(entityId);
    } catch (err) {
      setError(err as Error);
      console.error('Error al eliminar entidad:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const queryEntities = useCallback(async (options: QueryOptions): Promise<Sensor[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const entities = await fiwareService.queryEntities(options);
      return entities;
    } catch (err) {
      setError(err as Error);
      console.error('Error al consultar entidades:', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getEntity,
    getEntitiesByType,
    createEntity,
    updateEntity,
    deleteEntity,
    queryEntities,
  };
}

export default useFiware;
