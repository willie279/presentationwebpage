// Tipos relacionados con Métricas e Indicadores

export interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  timestamp: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface Indicator {
  id: string;
  name: string;
  description: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  status: 'good' | 'warning' | 'critical';
  lastUpdated: string;
}

export interface ChartDataPoint {
  timestamp: string;
  value: number;
  label?: string;
}

export interface ChartData {
  variableId: string;
  variableName: string;
  data: ChartDataPoint[];
  unit: string;
}

export interface VariableParameter {
  id: string;
  name: string;
  description: string;
  variables: Variable[];
}

export interface Variable {
  id: string;
  parameterId: string;
  name: string;
  type: 'analog' | 'digital' | 'calculated';
  currentValue: number;
  unit: string;
  min?: number;
  max?: number;
  lastUpdated: string;
}
