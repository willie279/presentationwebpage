// Servicio para métricas e indicadores

import * as fiwareService from './fiwareService';
import type { Metric, Indicator, Variable, ChartData } from '../../types/metric.types';
import { ENTITY_TYPES } from '../utils/constants';

/**
 * Obtiene todas las variables del sistema
 */
export const getAllVariables = async (): Promise<Variable[]> => {
  const entities = await fiwareService.getEntitiesByType(ENTITY_TYPES.VARIABLE);
  
  // Convertir entidades Fiware a Variables
  return entities.map(entity => ({
    id: entity.id,
    parameterId: entity.parameter?.value || '',
    name: entity.name?.value || entity.id,
    type: entity.variableType?.value || 'analog',
    currentValue: entity.currentValue?.value || 0,
    unit: entity.currentValue?.metadata?.unit || '',
    min: entity.min?.value,
    max: entity.max?.value,
    lastUpdated: entity.currentValue?.metadata?.timestamp || new Date().toISOString(),
  }));
};

/**
 * Obtiene variables agrupadas por parámetro
 */
export const getVariablesByParameter = async (
  parameterId: string
): Promise<Variable[]> => {
  const allVariables = await getAllVariables();
  return allVariables.filter(v => v.parameterId === parameterId);
};

/**
 * Obtiene una variable específica
 */
export const getVariableById = async (variableId: string): Promise<Variable> => {
  const entity = await fiwareService.getEntity(variableId);
  
  return {
    id: entity.id,
    parameterId: entity.parameter?.value || '',
    name: entity.name?.value || entity.id,
    type: entity.variableType?.value || 'analog',
    currentValue: entity.currentValue?.value || 0,
    unit: entity.currentValue?.metadata?.unit || '',
    min: entity.min?.value,
    max: entity.max?.value,
    lastUpdated: entity.currentValue?.metadata?.timestamp || new Date().toISOString(),
  };
};

/**
 * Obtiene todos los indicadores de desempeño
 */
export const getAllIndicators = async (): Promise<Indicator[]> => {
  const entities = await fiwareService.getEntitiesByType(ENTITY_TYPES.INDICATOR);
  
  return entities.map(entity => ({
    id: entity.id,
    name: entity.name?.value || entity.id,
    description: entity.description?.value || '',
    currentValue: entity.currentValue?.value || 0,
    targetValue: entity.targetValue?.value || 100,
    unit: entity.currentValue?.metadata?.unit || '',
    trend: entity.trend?.value || 'stable',
    status: entity.status?.value || 'good',
    lastUpdated: entity.currentValue?.metadata?.timestamp || new Date().toISOString(),
  }));
};

/**
 * Obtiene métricas principales del dashboard
 */
export const getDashboardMetrics = async (): Promise<{
  waterPurity: number;
  temperature: number;
  flowRate: number;
  systemStatus: string;
}> => {
  // En producción, esto vendría de sensores específicos o un agregado
  // Por ahora, mock de datos
  
  try {
    const sensors = await fiwareService.getActiveSensors();
    
    if (sensors.length === 0) {
      // Datos mock si no hay sensores
      return {
        waterPurity: 98.5,
        temperature: 25.3,
        flowRate: 150.0,
        systemStatus: 'optimal',
      };
    }
    
    // Calcular promedios de sensores activos
    const avgPurity = sensors.reduce(
      (sum, s) => sum + (s.waterPurity?.value || 0), 
      0
    ) / sensors.length;
    
    const avgTemp = sensors.reduce(
      (sum, s) => sum + (s.temperature?.value || 0), 
      0
    ) / sensors.length;
    
    const avgFlow = sensors.reduce(
      (sum, s) => sum + (s.flowRate?.value || 0), 
      0
    ) / sensors.length;
    
    return {
      waterPurity: avgPurity,
      temperature: avgTemp,
      flowRate: avgFlow,
      systemStatus: avgPurity >= 98 ? 'optimal' : avgPurity >= 95 ? 'good' : 'warning',
    };
  } catch (error) {
    console.error('Error al obtener métricas del dashboard:', error);
    // Retornar datos mock en caso de error
    return {
      waterPurity: 98.5,
      temperature: 25.3,
      flowRate: 150.0,
      systemStatus: 'optimal',
    };
  }
};

/**
 * Obtiene datos para gráficas
 */
export const getChartData = async (
  variableId: string,
  timeRange: 'hour' | 'day' | 'week' | 'month' = 'day'
): Promise<ChartData> => {
  // Mock: En producción, esto vendría de un servicio de historial
  const now = new Date();
  const dataPoints = timeRange === 'hour' ? 60 : timeRange === 'day' ? 24 : 
                     timeRange === 'week' ? 7 : 30;
  
  const interval = timeRange === 'hour' ? 60000 : timeRange === 'day' ? 3600000 : 
                   timeRange === 'week' ? 86400000 : 86400000;
  
  const mockData = Array.from({ length: dataPoints }, (_, i) => ({
    timestamp: new Date(now.getTime() - (dataPoints - 1 - i) * interval).toISOString(),
    value: 90 + Math.random() * 10, // Valores entre 90 y 100
  }));
  
  return {
    variableId,
    variableName: `Variable ${variableId}`,
    data: mockData,
    unit: '%',
  };
};

/**
 * Calcula el desempeño del sistema
 */
export const calculateSystemPerformance = async (params: {
  flowRate: number;
  initialPurity: number;
  treatmentTime: number;
  temperature: number;
}): Promise<{
  efficiency: number;
  finalPurity: number;
  energyConsumption: number;
  estimatedCost: number;
}> => {
  // Mock de cálculo (en producción, esto sería un modelo más complejo)
  const { flowRate, initialPurity, treatmentTime, temperature } = params;
  
  // Fórmulas simplificadas de ejemplo
  const efficiency = Math.min(
    95 + (temperature / 100) * 5 + Math.random() * 3,
    99.9
  );
  
  const finalPurity = Math.min(
    initialPurity + (100 - initialPurity) * (efficiency / 100),
    99.9
  );
  
  const energyConsumption = (flowRate * treatmentTime * 0.5) / 60; // kWh
  
  const estimatedCost = energyConsumption * 0.15; // $0.15 por kWh
  
  return {
    efficiency: Number(efficiency.toFixed(2)),
    finalPurity: Number(finalPurity.toFixed(2)),
    energyConsumption: Number(energyConsumption.toFixed(3)),
    estimatedCost: Number(estimatedCost.toFixed(2)),
  };
};

/**
 * Obtiene análisis prospectivo
 */
export const getProspectiveAnalysis = async (
  timeframe: 'week' | 'month' | 'quarter'
): Promise<{
  predictions: Array<{ date: string; predictedValue: number; confidence: number }>;
  trends: Array<{ metric: string; direction: 'up' | 'down' | 'stable'; change: number }>;
}> => {
  // Mock de análisis prospectivo
  const now = new Date();
  const days = timeframe === 'week' ? 7 : timeframe === 'month' ? 30 : 90;
  
  const predictions = Array.from({ length: days }, (_, i) => ({
    date: new Date(now.getTime() + (i + 1) * 86400000).toISOString().split('T')[0],
    predictedValue: 98 + Math.random() * 2,
    confidence: 85 + Math.random() * 10,
  }));
  
  const trends = [
    { metric: 'Pureza del agua', direction: 'up' as const, change: 0.5 },
    { metric: 'Eficiencia energética', direction: 'stable' as const, change: 0 },
    { metric: 'Costo operacional', direction: 'down' as const, change: -2.3 },
  ];
  
  return { predictions, trends };
};

export default {
  getAllVariables,
  getVariablesByParameter,
  getVariableById,
  getAllIndicators,
  getDashboardMetrics,
  getChartData,
  calculateSystemPerformance,
  getProspectiveAnalysis,
};
