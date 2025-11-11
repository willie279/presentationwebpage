// Tipos relacionados con Sensores

export interface SensorMetadata {
  unit?: string;
  timestamp?: string;
  [key: string]: any;
}

export interface SensorAttribute {
  type: string;
  value: number | string | boolean;
  metadata?: SensorMetadata;
}

export interface Sensor {
  id: string;
  type: string;
  name: SensorAttribute;
  waterPurity?: SensorAttribute;
  temperature?: SensorAttribute;
  flowRate?: SensorAttribute;
  pressure?: SensorAttribute;
  pH?: SensorAttribute;
  status: SensorAttribute;
  location?: SensorAttribute;
  [key: string]: any;
}

export interface CreateSensorPayload {
  id: string;
  type: string;
  name: string;
  attributes: Record<string, any>;
}

export interface UpdateSensorPayload {
  [key: string]: {
    type: string;
    value: any;
    metadata?: SensorMetadata;
  };
}
