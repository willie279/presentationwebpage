// Hook para datos en tiempo real

import { useState, useEffect, useRef } from 'react';
import * as fiwareService from '../services/api/fiwareService';
import { DATA_UPDATE_INTERVAL } from '../services/utils/constants';

interface UseRealTimeDataOptions {
  entityId: string;
  attribute?: string;
  updateInterval?: number;
  enabled?: boolean;
}

interface UseRealTimeDataReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Hook para obtener datos en tiempo real de Fiware Orion
 */
export function useRealTimeData<T = any>({
  entityId,
  attribute,
  updateInterval = DATA_UPDATE_INTERVAL,
  enabled = true,
}: UseRealTimeDataOptions): UseRealTimeDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const intervalRef = useRef<number | null>(null);

  const fetchData = async () => {
    try {
      if (attribute) {
        // Obtener solo un atributo específico
        const value = await fiwareService.getEntityAttribute(entityId, attribute);
        setData(value as T);
      } else {
        // Obtener entidad completa
        const entity = await fiwareService.getEntity(entityId);
        setData(entity as T);
      }
      setError(null);
    } catch (err) {
      setError(err as Error);
      console.error('Error al obtener datos en tiempo real:', err);
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    setLoading(true);
    await fetchData();
  };

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    // Fetch inicial
    fetchData();

    // Configurar intervalo de actualización
    intervalRef.current = window.setInterval(fetchData, updateInterval);

    // Cleanup
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [entityId, attribute, updateInterval, enabled]);

  return { data, loading, error, refresh };
}

export default useRealTimeData;
