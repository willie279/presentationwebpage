// Tipos relacionados con API y Fiware

export interface FiwareHeaders {
  'fiware-service'?: string;
  'fiware-servicepath'?: string;
  'Content-Type': string;
}

export interface ApiError {
  error: string;
  description?: string;
  statusCode?: number;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

export interface QueryOptions {
  type?: string;
  attrs?: string[];
  q?: string;
  limit?: number;
  offset?: number;
  orderBy?: string;
}

export interface Subscription {
  id?: string;
  description: string;
  subject: {
    entities: Array<{
      id?: string;
      idPattern?: string;
      type?: string;
    }>;
    condition?: {
      attrs?: string[];
      expression?: {
        q?: string;
      };
    };
  };
  notification: {
    http: {
      url: string;
    };
    attrs?: string[];
    attrsFormat?: string;
  };
  expires?: string;
  throttling?: number;
}
