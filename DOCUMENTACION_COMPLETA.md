# 📘 DOCUMENTACIÓN COMPLETA DEL PROYECTO
# Landing Page - Sistema de Tratamiento de Aguas con Hidrógeno
## EMP Medellín

---

## 📋 ÍNDICE

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Requisitos del Proyecto](#2-requisitos-del-proyecto)
3. [Arquitectura del Sistema](#3-arquitectura-del-sistema)
4. [Diseño Visual](#4-diseño-visual)
5. [Estructura del Frontend](#5-estructura-del-frontend)
6. [Funcionalidades](#6-funcionalidades)
7. [Sistema de Autenticación](#7-sistema-de-autenticación)
8. [Integración con Backend](#8-integración-con-backend)
9. [Dockerización](#9-dockerización)
10. [Guía de Desarrollo](#10-guía-de-desarrollo)
11. [Deployment](#11-deployment)
12. [Mantenimiento](#12-mantenimiento)

---

## 1. RESUMEN EJECUTIVO

### 1.1 Descripción del Proyecto
Desarrollo de una landing page moderna para el sistema de tratamiento de aguas con tecnología de hidrógeno de EMP Medellín. La aplicación permitirá monitoreo en tiempo real, visualización de datos de sensores, y gestión de indicadores de desempeño.

### 1.2 Objetivos Principales
- ✅ Crear interfaz intuitiva y minimalista
- ✅ Acceso rápido a métricas (máximo 3 clicks)
- ✅ Sistema de autenticación por roles (Admin/Operario)
- ✅ Visualización de datos en tiempo real
- ✅ Calculadora de desempeño integrada
- ✅ Containerización con Docker
- ✅ Integración con Fiware Orion backend

### 1.3 Tecnologías Utilizadas
| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| **Framework** | React | 18.x |
| **Build Tool** | Vite | 5.x |
| **Lenguaje** | TypeScript | 5.x |
| **Styling** | CSS Modules / Styled Components | - |
| **Gráficas** | Recharts / Chart.js | Latest |
| **State Management** | React Context / Zustand | Latest |
| **Routing** | React Router DOM | 6.x |
| **HTTP Client** | Axios | Latest |
| **Containerización** | Docker | Latest |
| **Backend** | Fiware Orion | 3.x |

---

## 2. REQUISITOS DEL PROYECTO

### 2.1 Requisitos Funcionales

#### RF-01: Autenticación
- El sistema debe permitir login como Administrador o Operario
- Administrador: Lectura y escritura de datos
- Operario: Solo lectura de datos
- Cada usuario tendrá credenciales únicas

#### RF-02: Dashboard Principal
- Visualización de métricas clave en máximo 3 clicks
- Acceso rápido a:
  - Nivel de pureza del agua
  - Gráficas de sensores
  - Indicadores de desempeño

#### RF-03: Menú de Variables
- Agrupación de variables según parámetros
- Visualización de datos por tipo (según columna ID)
- Gráficas interactivas por variable

#### RF-04: Menú de Indicadores
- Visualización de KPIs del sistema
- Indicadores de desempeño en tiempo real
- Alertas visuales según umbrales

#### RF-05: CRUD de Sensores
- Crear, leer, actualizar, eliminar sensores (solo Admin)
- Configuración de parámetros de sensores
- Historial de cambios

#### RF-06: Análisis Prospectivo
- Predicciones basadas en datos históricos
- Tendencias y patrones
- Reportes visuales

#### RF-07: Calculadora de Desempeño
- Ventana emergente (modal)
- Inputs para parámetros de cálculo
- Resultados en tiempo real
- Exportación de resultados

### 2.2 Requisitos No Funcionales

#### RNF-01: Rendimiento
- Tiempo de carga inicial: < 3 segundos
- Actualización de datos en tiempo real: < 1 segundo
- Optimización de imágenes y assets

#### RNF-02: Usabilidad
- Interfaz intuitiva y minimalista
- Navegación simple (máximo 3 clicks a cualquier destino)
- Feedback visual inmediato en todas las acciones

#### RNF-03: Compatibilidad
- Diseño para desktop únicamente (no responsivo)
- Resolución mínima: 1920x1080
- Navegadores: Chrome, Firefox, Edge (últimas versiones)

#### RNF-04: Seguridad
- Autenticación segura
- Tokens de sesión
- Validación de permisos por rol
- HTTPS en producción

#### RNF-05: Mantenibilidad
- Código modular y reutilizable
- Documentación inline
- Componentes separados y testeables

---

## 3. ARQUITECTURA DEL SISTEMA

### 3.1 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND (React + Vite)              │
│                         Puerto 3000                         │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │   Auth        │  │   Dashboard   │  │   Variables   │  │
│  │   Module      │  │   Module      │  │   Module      │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │  Indicadores  │  │  CRUD Sensores│  │   Análisis    │  │
│  │   Module      │  │   Module      │  │   Module      │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
│  ┌───────────────────────────────────────────────────────┐ │
│  │         Calculadora de Desempeño (Modal)             │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↕ HTTP/REST API
┌─────────────────────────────────────────────────────────────┐
│                   API LAYER (Axios + Services)              │
│                       Manejo de Estado                      │
└─────────────────────────────────────────────────────────────┘
                              ↕ NGSI-v2
┌─────────────────────────────────────────────────────────────┐
│                   BACKEND (Fiware Orion)                    │
│                         Puerto 1026                         │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │  Context      │  │  Entidades    │  │  Subscriptions│  │
│  │  Broker       │  │  NGSI         │  │               │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                     BASE DE DATOS (MongoDB)                 │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Estructura de Carpetas del Proyecto

```
aquapure-h2-frontend/
│
├── public/
│   ├── images/
│   │   └── planta-tratamiento.jpg
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.test.tsx
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Input/
│   │   │   └── Loader/
│   │   │
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── Footer/
│   │   │   └── MainLayout/
│   │   │
│   │   └── features/
│   │       ├── auth/
│   │       │   ├── LoginModal/
│   │       │   └── ProtectedRoute/
│   │       ├── dashboard/
│   │       │   ├── MetricCard/
│   │       │   └── QuickAccessGrid/
│   │       ├── variables/
│   │       ├── indicadores/
│   │       ├── sensores/
│   │       ├── analisis/
│   │       └── calculadora/
│   │
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Variables.tsx
│   │   ├── Indicadores.tsx
│   │   ├── Sensores.tsx
│   │   └── Analisis.tsx
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── axiosConfig.ts
│   │   │   ├── fiwareService.ts
│   │   │   ├── authService.ts
│   │   │   ├── sensorsService.ts
│   │   │   └── metricsService.ts
│   │   └── utils/
│   │       ├── formatters.ts
│   │       ├── validators.ts
│   │       └── constants.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useFiware.ts
│   │   ├── useRealTimeData.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── DataContext.tsx
│   │
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── sensor.types.ts
│   │   ├── metric.types.ts
│   │   └── api.types.ts
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── reset.css
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .dockerignore
│
├── .env.example
├── .env.development
├── .env.production
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 4. DISEÑO VISUAL

### 4.1 Paleta de Colores EMP Medellín

```css
:root {
  /* Colores Principales */
  --color-blanco-hueso: #F5F5DC;
  --color-gris: #808080;
  --color-negro-gris: #2C2C2C;
  --color-verde-emp: #4CAF50;
  --color-verde-emp-hover: #45a049;
  
  /* Colores Complementarios */
  --color-success: #4CAF50;
  --color-warning: #FFC107;
  --color-error: #F44336;
  --color-info: #2196F3;
  
  /* Sombras */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.2);
  
  /* Transiciones */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### 4.2 Tipografía

```css
/* Familia de fuentes */
font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Tamaños */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 22px;
--font-size-2xl: 28px;
--font-size-3xl: 36px;
--font-size-4xl: 48px;
--font-size-5xl: 64px;

/* Pesos */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 4.3 Opciones de Diseño

#### Opción 1: Corporativa Elegante
**Características:**
- Header superior con logo y botón de login
- Hero section centralizado con título grande
- Grid de 6 tarjetas de acceso rápido (3x2)
- Imagen de planta de fondo con overlay oscuro
- Botón flotante de calculadora (bottom-right)
- Diseño limpio y profesional

**Mejor para:**
- Presentaciones corporativas
- Clientes que prefieren layouts tradicionales
- Énfasis en contenido y accesos rápidos

#### Opción 2: Moderna Minimalista
**Características:**
- Sidebar fijo izquierdo con navegación
- Hero split (50/50): texto + tarjetas
- Estadísticas destacadas (99.8% pureza, 24/7, <3 clicks)
- Grid asimétrico de tarjetas (más dinámico)
- Badge de empresa en esquina inferior
- Diseño más innovador y espacioso

**Mejor para:**
- Aplicaciones modernas
- Énfasis en UX y usabilidad
- Navegación lateral intuitiva

### 4.4 Componentes de UI

#### Botón Primario
```css
.button-primary {
  padding: 12px 30px;
  background: var(--color-verde-emp);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.button-primary:hover {
  background: var(--color-verde-emp-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.5);
}
```

#### Card de Acceso
```css
.access-card {
  background: var(--color-blanco-hueso);
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.access-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-verde-emp);
  box-shadow: 0 15px 40px rgba(76, 175, 80, 0.3);
}
```

---

## 5. ESTRUCTURA DEL FRONTEND

### 5.1 Páginas Principales

#### 5.1.1 Landing Page (Antes del Login)
**Ruta:** `/`
**Propósito:** Página de entrada con opciones de acceso rápido
**Componentes:**
- Header con logo y botón de login
- Hero section con descripción del sistema
- Grid de accesos rápidos (vista previa)
- Botón flotante de calculadora
- Al hacer click en cualquier opción → Modal de login

#### 5.1.2 Dashboard (Después del Login)
**Ruta:** `/dashboard`
**Propósito:** Panel principal con métricas clave
**Componentes:**
- Sidebar/Header con navegación
- Tarjetas de métricas en tiempo real
- Gráficas de sensores principales
- Accesos rápidos a secciones

#### 5.1.3 Variables
**Ruta:** `/variables`
**Propósito:** Visualización de variables agrupadas
**Componentes:**
- Selector de parámetros (agrupación)
- Lista de variables por parámetro
- Gráficas individuales por variable
- Filtros por tipo (según columna "type")

#### 5.1.4 Indicadores
**Ruta:** `/indicadores`
**Propósito:** KPIs y métricas de desempeño
**Componentes:**
- Tarjetas de indicadores principales
- Gráficas de tendencias
- Comparativas históricas
- Alertas y umbrales

#### 5.1.5 CRUD Sensores (Solo Admin)
**Ruta:** `/sensores`
**Propósito:** Gestión completa de sensores
**Componentes:**
- Tabla de sensores con acciones
- Formulario de crear/editar sensor
- Modal de confirmación de eliminación
- Historial de cambios

#### 5.1.6 Análisis Prospectivo
**Ruta:** `/analisis`
**Propósito:** Predicciones y análisis avanzado
**Componentes:**
- Gráficas de predicción
- Modelos de tendencias
- Comparativas de escenarios
- Exportación de reportes

### 5.2 Componentes Modales

#### 5.2.1 Modal de Login
**Trigger:** Click en botón "Iniciar Sesión" o acceso a contenido protegido
**Contenido:**
- Título: "Iniciar Sesión"
- Radio buttons: Administrador / Operario
- Input: Usuario
- Input: Contraseña (type="password")
- Botón: "Ingresar"
- Mensaje de error (si aplica)

#### 5.2.2 Modal Calculadora de Desempeño
**Trigger:** Click en botón flotante 🧮
**Contenido:**
- Título: "Calculadora de Desempeño"
- Inputs para parámetros:
  - Caudal de entrada (L/min)
  - Nivel de pureza inicial (%)
  - Tiempo de tratamiento (min)
  - Temperatura (°C)
- Botón: "Calcular"
- Sección de resultados:
  - Eficiencia del sistema (%)
  - Pureza final estimada (%)
  - Consumo energético (kWh)
  - Costo estimado ($)
- Botón: "Exportar PDF"

---

## 6. FUNCIONALIDADES

### 6.1 Sistema de Navegación

#### Navegación en 3 Clicks o Menos
**Ejemplos de rutas:**

1. **Ver nivel de pureza:**
   - Click 1: Login → Click 2: Dashboard → **Dato visible**

2. **Ver gráfica de sensor específico:**
   - Click 1: Login → Click 2: Variables → Click 3: **Gráfica seleccionada**

3. **Ver indicador de desempeño:**
   - Click 1: Login → Click 2: Indicadores → **Datos visibles**

4. **Abrir calculadora:**
   - Click 1: **Botón flotante** → Modal abierta

### 6.2 Actualización en Tiempo Real

#### Implementación con Fiware Orion
```typescript
// Servicio de subscripción a cambios
const subscribeToEntityChanges = async (entityId: string) => {
  const subscription = {
    description: "Notificación de cambios en sensores",
    subject: {
      entities: [{ id: entityId, type: "Sensor" }],
      condition: {
        attrs: ["waterPurity", "temperature", "flowRate"]
      }
    },
    notification: {
      http: {
        url: "http://frontend:3000/api/notifications"
      },
      attrs: ["waterPurity", "temperature", "flowRate"]
    }
  };

  await axios.post(
    `${FIWARE_URL}/v2/subscriptions`,
    subscription
  );
};
```

#### WebSocket para Updates en Vivo
```typescript
// Hook personalizado para datos en tiempo real
const useRealTimeData = (entityId: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Polling cada 2 segundos
    const interval = setInterval(async () => {
      const response = await fiwareService.getEntity(entityId);
      setData(response.data);
    }, 2000);

    return () => clearInterval(interval);
  }, [entityId]);

  return data;
};
```

### 6.3 Gestión de Permisos

#### Matriz de Permisos
| Funcionalidad | Operario | Administrador |
|---------------|----------|---------------|
| Ver Dashboard | ✅ | ✅ |
| Ver Variables | ✅ | ✅ |
| Ver Gráficas | ✅ | ✅ |
| Ver Indicadores | ✅ | ✅ |
| Ver Análisis | ✅ | ✅ |
| Usar Calculadora | ✅ | ✅ |
| Crear Sensor | ❌ | ✅ |
| Editar Sensor | ❌ | ✅ |
| Eliminar Sensor | ❌ | ✅ |
| Modificar Parámetros | ❌ | ✅ |
| Exportar Reportes | ✅ | ✅ |

#### Implementación de ProtectedRoute
```typescript
// components/features/auth/ProtectedRoute/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'operario';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && userRole !== requiredRole && userRole !== 'admin') {
    return <div>No tienes permisos para acceder a esta sección</div>;
  }

  return <>{children}</>;
};
```

---

## 7. SISTEMA DE AUTENTICACIÓN

### 7.1 Flujo de Autenticación

```
┌─────────────┐
│   Usuario   │
│  No logueado│
└──────┬──────┘
       │
       │ Click en acceso o botón Login
       ▼
┌─────────────────┐
│  Modal Login    │
│  - Usuario      │
│  - Contraseña   │
│  - Tipo (radio) │
└──────┬──────────┘
       │
       │ Submit
       ▼
┌─────────────────┐
│ Validar credenc.│
│  (Backend API)  │
└──────┬──────────┘
       │
       ├─── ✅ Válido ────┐
       │                  ▼
       │          ┌───────────────┐
       │          │ Guardar token │
       │          │ Guardar role  │
       │          └───────┬───────┘
       │                  │
       │                  ▼
       │          ┌───────────────┐
       │          │  Redirect a   │
       │          │   Dashboard   │
       │          └───────────────┘
       │
       └─── ❌ Inválido ──┐
                          ▼
                  ┌───────────────┐
                  │ Mostrar error │
                  │ en modal      │
                  └───────────────┘
```

### 7.2 Estructura de Usuarios

#### Usuarios del Sistema
```json
{
  "usuarios": [
    {
      "id": "admin001",
      "username": "admin.emp",
      "password": "hashed_password_123",
      "role": "admin",
      "nombre": "Administrador EMP",
      "email": "admin@emp-medellin.com"
    },
    {
      "id": "oper001",
      "username": "operario.emp",
      "password": "hashed_password_456",
      "role": "operario",
      "nombre": "Operario Planta",
      "email": "operario@emp-medellin.com"
    }
  ]
}
```

### 7.3 Implementación del AuthContext

```typescript
// src/context/AuthContext.tsx
interface AuthContextType {
  isAuthenticated: boolean;
  userRole: 'admin' | 'operario' | null;
  userName: string | null;
  login: (username: string, password: string, role: 'admin' | 'operario') => Promise<void>;
  logout: () => void;
  canWrite: boolean;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'operario' | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const login = async (username: string, password: string, role: 'admin' | 'operario') => {
    try {
      const response = await authService.login({ username, password, role });
      const { token, user } = response.data;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userName', user.nombre);
      
      setIsAuthenticated(true);
      setUserRole(user.role);
      setUserName(user.nombre);
    } catch (error) {
      throw new Error('Credenciales inválidas');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName(null);
  };

  const canWrite = userRole === 'admin';

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      userRole, 
      userName, 
      login, 
      logout, 
      canWrite 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

## 8. INTEGRACIÓN CON BACKEND

### 8.1 Fiware Orion Context Broker

#### ¿Qué es Fiware Orion?
Fiware Orion es un Context Broker que gestiona información de contexto en tiempo real mediante el estándar NGSI-v2 (Next Generation Service Interface).

#### Características principales:
- Gestión de entidades y atributos
- Subscripciones a cambios en tiempo real
- Queries avanzadas
- API RESTful

### 8.2 Estructura de Entidades NGSI

#### Entidad: Sensor de Pureza
```json
{
  "id": "Sensor:001",
  "type": "WaterPuritySensor",
  "name": {
    "type": "Text",
    "value": "Sensor de Pureza Principal"
  },
  "waterPurity": {
    "type": "Number",
    "value": 98.5,
    "metadata": {
      "unit": {
        "type": "Text",
        "value": "percentage"
      },
      "timestamp": {
        "type": "DateTime",
        "value": "2025-11-11T10:30:00Z"
      }
    }
  },
  "location": {
    "type": "geo:point",
    "value": "6.2442, -75.5812"
  },
  "status": {
    "type": "Text",
    "value": "active"
  }
}
```

#### Entidad: Variable del Sistema
```json
{
  "id": "Variable:Temperature:001",
  "type": "SystemVariable",
  "parameter": {
    "type": "Text",
    "value": "Temperature"
  },
  "variableId": {
    "type": "Text",
    "value": "TEMP_IN_01"
  },
  "variableType": {
    "type": "Text",
    "value": "analog"
  },
  "currentValue": {
    "type": "Number",
    "value": 25.3,
    "metadata": {
      "unit": {
        "type": "Text",
        "value": "celsius"
      }
    }
  }
}
```

### 8.3 Servicios de API

#### fiwareService.ts
```typescript
// src/services/api/fiwareService.ts
import axios from 'axios';

const FIWARE_BASE_URL = import.meta.env.VITE_FIWARE_URL || 'http://localhost:1026';

// Cliente Axios configurado para Fiware
const fiwareClient = axios.create({
  baseURL: `${FIWARE_BASE_URL}/v2`,
  headers: {
    'Content-Type': 'application/json',
    'fiware-service': 'aquapure',
    'fiware-servicepath': '/'
  }
});

// Obtener todas las entidades de un tipo
export const getEntitiesByType = async (type: string) => {
  const response = await fiwareClient.get('/entities', {
    params: { type }
  });
  return response.data;
};

// Obtener una entidad específica
export const getEntity = async (entityId: string) => {
  const response = await fiwareClient.get(`/entities/${entityId}`);
  return response.data;
};

// Actualizar atributos de una entidad
export const updateEntityAttributes = async (entityId: string, attributes: any) => {
  await fiwareClient.patch(`/entities/${entityId}/attrs`, attributes);
};

// Crear nueva entidad
export const createEntity = async (entity: any) => {
  await fiwareClient.post('/entities', entity);
};

// Eliminar entidad
export const deleteEntity = async (entityId: string) => {
  await fiwareClient.delete(`/entities/${entityId}`);
};

// Subscribir a cambios
export const createSubscription = async (subscription: any) => {
  const response = await fiwareClient.post('/subscriptions', subscription);
  return response.data;
};

// Consultas avanzadas
export const queryEntities = async (query: any) => {
  const response = await fiwareClient.post('/op/query', query);
  return response.data;
};
```

### 8.4 Ejemplos de Uso

#### Obtener métricas de pureza en tiempo real
```typescript
// En un componente React
const PurityMetric: React.FC = () => {
  const [purity, setPurity] = useState<number | null>(null);

  useEffect(() => {
    const fetchPurity = async () => {
      const sensor = await fiwareService.getEntity('Sensor:001');
      setPurity(sensor.waterPurity.value);
    };

    // Actualizar cada 2 segundos
    const interval = setInterval(fetchPurity, 2000);
    fetchPurity(); // Primera carga

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="metric-card">
      <h3>Nivel de Pureza</h3>
      <p className="metric-value">{purity ? `${purity}%` : 'Cargando...'}</p>
    </div>
  );
};
```

#### Crear nuevo sensor (solo Admin)
```typescript
const createNewSensor = async (sensorData: any) => {
  const newSensor = {
    id: `Sensor:${Date.now()}`,
    type: "WaterPuritySensor",
    name: {
      type: "Text",
      value: sensorData.name
    },
    waterPurity: {
      type: "Number",
      value: 0
    },
    status: {
      type: "Text",
      value: "inactive"
    }
  };

  await fiwareService.createEntity(newSensor);
  alert('Sensor creado exitosamente');
};
```

---

## 9. DOCKERIZACIÓN

### 9.1 Estructura de Docker

```
docker/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── nginx.conf (opcional para producción)
```

### 9.2 Dockerfile

```dockerfile
# docker/Dockerfile

# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Build de producción
RUN npm run build

# Etapa 2: Producción con Nginx
FROM nginx:alpine

# Copiar build de React
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de Nginx (opcional)
# COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
```

### 9.3 docker-compose.yml

```yaml
# docker/docker-compose.yml
version: '3.8'

services:
  # Frontend React
  frontend:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    container_name: aquapure-frontend
    ports:
      - "3000:80"
    environment:
      - VITE_FIWARE_URL=http://orion:1026
      - VITE_API_URL=http://backend:4000
    networks:
      - aquapure-network
    depends_on:
      - orion
    restart: unless-stopped

  # Fiware Orion Context Broker
  orion:
    image: fiware/orion:3.10.1
    container_name: aquapure-orion
    ports:
      - "1026:1026"
    command: -dbhost mongo
    environment:
      - ORION_LOG_LEVEL=DEBUG
    networks:
      - aquapure-network
    depends_on:
      - mongo
    restart: unless-stopped

  # MongoDB para Fiware Orion
  mongo:
    image: mongo:4.4
    container_name: aquapure-mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - aquapure-network
    restart: unless-stopped

networks:
  aquapure-network:
    driver: bridge

volumes:
  mongo-data:
    driver: local
```

### 9.4 .dockerignore

```
# docker/.dockerignore
node_modules
dist
build
.git
.gitignore
.env
.env.local
.env.development
.env.production
README.md
*.md
.vscode
.idea
coverage
.DS_Store
```

### 9.5 Comandos Docker

#### Construcción
```bash
# Construir imagen
docker build -t aquapure-frontend:latest -f docker/Dockerfile .

# Construir con docker-compose
docker-compose -f docker/docker-compose.yml build
```

#### Ejecución
```bash
# Levantar todos los servicios
docker-compose -f docker/docker-compose.yml up -d

# Ver logs
docker-compose -f docker/docker-compose.yml logs -f frontend

# Detener servicios
docker-compose -f docker/docker-compose.yml down

# Detener y eliminar volúmenes
docker-compose -f docker/docker-compose.yml down -v
```

#### Verificación
```bash
# Ver contenedores corriendo
docker ps

# Acceder al contenedor
docker exec -it aquapure-frontend sh

# Ver logs de Orion
docker logs -f aquapure-orion
```

---

## 10. GUÍA DE DESARROLLO

### 10.1 Configuración Inicial

#### Paso 1: Crear Proyecto con Vite
```bash
# Crear proyecto
npm create vite@latest aquapure-h2-frontend -- --template react-ts

# Navegar al directorio
cd aquapure-h2-frontend

# Instalar dependencias
npm install
```

#### Paso 2: Instalar Dependencias Adicionales
```bash
# Routing
npm install react-router-dom

# HTTP Client
npm install axios

# State Management
npm install zustand

# Gráficas
npm install recharts

# Formularios
npm install react-hook-form

# Íconos
npm install react-icons

# Utilities
npm install date-fns

# Testing (opcional)
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

#### Paso 3: Configurar Variables de Entorno
```bash
# .env.development
VITE_FIWARE_URL=http://localhost:1026
VITE_API_URL=http://localhost:4000
VITE_APP_NAME=AquaPure H2

# .env.production
VITE_FIWARE_URL=https://orion.emp-medellin.com
VITE_API_URL=https://api.emp-medellin.com
VITE_APP_NAME=AquaPure H2
```

### 10.2 Estructura de Desarrollo

#### Orden de Implementación Recomendado

**Fase 1: Configuración Base (Día 1)**
1. ✅ Configurar Vite y TypeScript
2. ✅ Crear estructura de carpetas
3. ✅ Configurar estilos globales (variables CSS)
4. ✅ Configurar React Router
5. ✅ Crear componentes de layout básicos

**Fase 2: Autenticación (Día 2)**
1. ✅ Crear AuthContext
2. ✅ Implementar LoginModal
3. ✅ Crear ProtectedRoute
4. ✅ Configurar rutas protegidas
5. ✅ Mock de autenticación (temporal)

**Fase 3: Landing Page (Día 3)**
1. ✅ Implementar diseño elegido (Opción 1 o 2)
2. ✅ Crear componentes reutilizables (Button, Card)
3. ✅ Integrar imagen de fondo de la planta
4. ✅ Implementar efectos hover
5. ✅ Conectar con modal de login

**Fase 4: Dashboard (Día 4-5)**
1. ✅ Crear layout del dashboard
2. ✅ Implementar tarjetas de métricas
3. ✅ Crear componentes de gráficas
4. ✅ Mock de datos iniciales
5. ✅ Navegación entre secciones

**Fase 5: Menú Variables (Día 6)**
1. ✅ Crear página de Variables
2. ✅ Implementar selector de parámetros
3. ✅ Lista de variables por parámetro
4. ✅ Gráficas individuales
5. ✅ Filtros por tipo

**Fase 6: Menú Indicadores (Día 7)**
1. ✅ Crear página de Indicadores
2. ✅ Tarjetas de KPIs
3. ✅ Gráficas de tendencias
4. ✅ Sistema de alertas visuales
5. ✅ Comparativas

**Fase 7: CRUD Sensores (Día 8)**
1. ✅ Crear página de Sensores
2. ✅ Tabla con acciones (solo admin)
3. ✅ Formularios de crear/editar
4. ✅ Confirmaciones de eliminación
5. ✅ Validaciones

**Fase 8: Análisis Prospectivo (Día 9)**
1. ✅ Crear página de Análisis
2. ✅ Gráficas de predicción
3. ✅ Modelos de tendencias
4. ✅ Exportación de reportes
5. ✅ Filtros temporales

**Fase 9: Calculadora de Desempeño (Día 10)**
1. ✅ Crear modal de calculadora
2. ✅ Formulario con inputs
3. ✅ Lógica de cálculo
4. ✅ Visualización de resultados
5. ✅ Exportación a PDF

**Fase 10: Integración Fiware (Día 11-12)**
1. ✅ Configurar servicios de API
2. ✅ Reemplazar mocks con datos reales
3. ✅ Implementar subscripciones
4. ✅ Manejo de errores
5. ✅ Testing de integración

**Fase 11: Dockerización (Día 13)**
1. ✅ Crear Dockerfile
2. ✅ Crear docker-compose.yml
3. ✅ Testing local con Docker
4. ✅ Optimización de imagen
5. ✅ Documentación

**Fase 12: Testing y Optimización (Día 14-15)**
1. ✅ Testing de componentes
2. ✅ Testing de integración
3. ✅ Optimización de performance
4. ✅ Accesibilidad
5. ✅ Documentación final

### 10.3 Ejemplo de Componente Completo

```typescript
// src/components/features/dashboard/MetricCard/MetricCard.tsx
import React, { useEffect, useState } from 'react';
import { fiwareService } from '@/services/api/fiwareService';
import styles from './MetricCard.module.css';

interface MetricCardProps {
  title: string;
  icon: string;
  entityId: string;
  attribute: string;
  unit?: string;
  decimals?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  icon,
  entityId,
  attribute,
  unit = '',
  decimals = 1
}) => {
  const [value, setValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entity = await fiwareService.getEntity(entityId);
        const attrValue = entity[attribute]?.value;
        setValue(attrValue);
        setError(null);
      } catch (err) {
        setError('Error al cargar datos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Primera carga
    fetchData();

    // Actualización en tiempo real cada 2 segundos
    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, [entityId, attribute]);

  const formatValue = (val: number | null) => {
    if (val === null) return '--';
    return val.toFixed(decimals);
  };

  return (
    <div className={styles.metricCard}>
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <div className={styles.content}>
        {loading && <p className={styles.loading}>Cargando...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {!loading && !error && (
          <p className={styles.value}>
            {formatValue(value)}
            {unit && <span className={styles.unit}> {unit}</span>}
          </p>
        )}
      </div>

      <div className={styles.footer}>
        <span className={styles.timestamp}>
          Actualizado: {new Date().toLocaleTimeString('es-ES')}
        </span>
      </div>
    </div>
  );
};
```

```css
/* src/components/features/dashboard/MetricCard/MetricCard.module.css */
.metricCard {
  background: var(--color-blanco-hueso);
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.metricCard:hover {
  transform: translateY(-5px);
  border-color: var(--color-verde-emp);
  box-shadow: var(--shadow-lg);
}

.header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.icon {
  width: 50px;
  height: 50px;
  background: var(--color-verde-emp);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.title {
  color: var(--color-negro-gris);
  font-size: 18px;
  font-weight: 600;
  flex: 1;
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value {
  font-size: 42px;
  font-weight: 700;
  color: var(--color-verde-emp);
  margin: 0;
}

.unit {
  font-size: 24px;
  color: var(--color-gris);
  font-weight: 400;
}

.loading,
.error {
  color: var(--color-gris);
  font-size: 16px;
  font-style: italic;
}

.error {
  color: var(--color-error);
}

.footer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
}

.timestamp {
  font-size: 12px;
  color: var(--color-gris);
}
```

---

## 11. DEPLOYMENT

### 11.1 Checklist Pre-Deployment

- [ ] **Variables de entorno configuradas** para producción
- [ ] **Build de producción** generado y testeado
- [ ] **Docker images** construidas y probadas
- [ ] **Conexión con Fiware Orion** verificada
- [ ] **Autenticación** funcionando correctamente
- [ ] **Todos los links** y rutas funcionando
- [ ] **Performance optimizada** (Lighthouse score > 90)
- [ ] **Imágenes optimizadas**
- [ ] **HTTPS configurado**
- [ ] **Backup de base de datos** (MongoDB)
- [ ] **Monitoreo** configurado
- [ ] **Documentación** actualizada

### 11.2 Proceso de Deployment

#### Opción 1: Deployment con Docker Compose
```bash
# En el servidor de producción

# 1. Clonar repositorio
git clone https://github.com/emp-medellin/aquapure-h2-frontend.git
cd aquapure-h2-frontend

# 2. Configurar variables de entorno
cp .env.example .env.production
nano .env.production  # Editar con valores reales

# 3. Build y levantar servicios
docker-compose -f docker/docker-compose.yml up -d --build

# 4. Verificar
docker ps
curl http://localhost:3000
```

#### Opción 2: Deployment con Nginx Reverse Proxy
```nginx
# /etc/nginx/sites-available/aquapure

server {
    listen 80;
    server_name aquapure.emp-medellin.com;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name aquapure.emp-medellin.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/aquapure.emp-medellin.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aquapure.emp-medellin.com/privkey.pem;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API (Fiware Orion)
    location /orion/ {
        proxy_pass http://localhost:1026/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 11.3 Monitoreo y Logs

```bash
# Ver logs del frontend
docker logs -f aquapure-frontend

# Ver logs de Orion
docker logs -f aquapure-orion

# Ver logs de MongoDB
docker logs -f aquapure-mongo

# Monitorear uso de recursos
docker stats
```

---

## 12. MANTENIMIENTO

### 12.1 Actualizaciones

#### Actualizar código
```bash
# Pull cambios
git pull origin main

# Rebuild y restart
docker-compose -f docker/docker-compose.yml up -d --build
```

#### Actualizar dependencias
```bash
# En entorno de desarrollo
npm update

# Verificar vulnerabilidades
npm audit

# Corregir vulnerabilidades
npm audit fix
```

### 12.2 Backup

#### Backup de MongoDB
```bash
# Backup manual
docker exec aquapure-mongo mongodump --out /data/backup

# Copiar backup al host
docker cp aquapure-mongo:/data/backup ./backups/$(date +%Y%m%d)

# Backup automatizado (cron job)
# Agregar a crontab:
# 0 2 * * * /path/to/backup-script.sh
```

#### Backup de configuración
```bash
# Backup de archivos de configuración
tar -czf config-backup-$(date +%Y%m%d).tar.gz \
  .env.production \
  docker/docker-compose.yml \
  nginx.conf
```

### 12.3 Troubleshooting

#### Frontend no carga
```bash
# Verificar contenedor
docker ps
docker logs aquapure-frontend

# Verificar conectividad
curl http://localhost:3000

# Reiniciar contenedor
docker restart aquapure-frontend
```

#### No conecta con Fiware Orion
```bash
# Verificar Orion está corriendo
docker ps | grep orion

# Verificar conectividad
curl http://localhost:1026/version

# Ver logs de Orion
docker logs aquapure-orion

# Verificar red Docker
docker network inspect aquapure-network
```

#### Datos no se actualizan
```bash
# Verificar subscripciones en Orion
curl http://localhost:1026/v2/subscriptions

# Verificar entidades
curl http://localhost:1026/v2/entities

# Reiniciar Orion
docker restart aquapure-orion
```

---

## 📞 CONTACTO Y SOPORTE

**Proyecto:** AquaPure H₂ - Sistema de Tratamiento de Aguas  
**Cliente:** EMP Medellín  
**Fecha de creación:** Noviembre 2025  
**Versión del documento:** 1.0

---

## ✅ PRÓXIMOS PASOS

1. ✅ **Aprobación de diseño** - Elegir entre Opción 1 o Opción 2
2. ⏳ **Desarrollo del frontend** - Implementar diseño elegido con React
3. ⏳ **Integración con Fiware Orion** - Conectar con backend real
4. ⏳ **Testing completo** - Verificar todas las funcionalidades
5. ⏳ **Dockerización** - Containerizar aplicación
6. ⏳ **Deployment** - Publicar en servidor de producción
7. ⏳ **Capacitación** - Entrenar usuarios (Admin y Operarios)
8. ⏳ **Go Live** - Poner en producción

---

**Documento generado automáticamente**  
**Última actualización:** 11 de Noviembre de 2025
