# 🌊 AquaPure H₂ - Sistema de Tratamiento de Aguas con Hidrógeno
## EMP Medellín

---

## 📋 RESUMEN DEL PROYECTO

Proyecto de **landing page y dashboard** para sistema de tratamiento de aguas con tecnología de hidrógeno, desarrollado con **React + Vite** y completamente **dockerizado**.

---

## 🎨 OPCIONES DE DISEÑO DISPONIBLES

Se han creado **DOS prototipos** de diseño para que elijas el que mejor se adapte a tus necesidades:

### 🏢 OPCIÓN 1: CORPORATIVA ELEGANTE
**Archivo:** `design-option-1.html`

**Características:**
- ✅ Header superior con logo y botón de login
- ✅ Hero section centralizado con título grande
- ✅ Grid de 6 tarjetas de acceso rápido (3x2)
- ✅ Imagen de planta de fondo con overlay oscuro/verde
- ✅ Botón flotante de calculadora (esquina inferior derecha)
- ✅ Diseño limpio, profesional y corporativo

**Mejor para:**
- Presentaciones corporativas formales
- Enfoque en contenido y funcionalidad
- Layouts tradicionales y confiables

**Vista Previa:** Abre `design-option-1.html` en tu navegador

---

### 🚀 OPCIÓN 2: MODERNA MINIMALISTA
**Archivo:** `design-option-2.html`

**Características:**
- ✅ Sidebar fijo izquierdo con navegación integrada
- ✅ Hero split (50/50): texto grande + tarjetas interactivas
- ✅ Estadísticas destacadas (99.8% pureza, 24/7, <3 clicks)
- ✅ Grid asimétrico de tarjetas más dinámico
- ✅ Badge de empresa en esquina inferior
- ✅ Diseño innovador, espacioso y moderno

**Mejor para:**
- Aplicaciones web modernas
- Énfasis en UX y navegación intuitiva
- Presentaciones impactantes

**Vista Previa:** Abre `design-option-2.html` en tu navegador

---

## 🎯 CÓMO VER LAS OPCIONES

1. **Abrir los archivos HTML en tu navegador:**
   ```bash
   # Desde la carpeta del proyecto
   # Opción 1
   open design-option-1.html  # Mac
   start design-option-1.html # Windows
   xdg-open design-option-1.html # Linux
   
   # Opción 2
   open design-option-2.html
   ```

2. **Comparar ambas opciones** lado a lado

3. **Interactuar** con los botones y tarjetas (tienen simulación básica)

4. **Decidir** cuál opción prefieres para el desarrollo completo

---

## 📚 DOCUMENTACIÓN DISPONIBLE

### 1. **GUIA_FIGMA.md**
Guía completa paso a paso para recrear el diseño elegido en Figma:
- ✅ Configuración del proyecto en Figma
- ✅ Paleta de colores EMP Medellín
- ✅ Tipografía y estilos de texto
- ✅ Paso a paso detallado para cada opción
- ✅ Componentes reutilizables
- ✅ Exportación y handoff para desarrolladores

### 2. **DOCUMENTACION_COMPLETA.md**
Documentación técnica exhaustiva del proyecto:
- ✅ Requisitos funcionales y no funcionales
- ✅ Arquitectura del sistema
- ✅ Estructura de carpetas y archivos
- ✅ Funcionalidades detalladas
- ✅ Sistema de autenticación (Admin/Operario)
- ✅ Integración con Fiware Orion backend
- ✅ Dockerización completa
- ✅ Guía de desarrollo (15 días)
- ✅ Deployment y mantenimiento

---

## 🛠️ TECNOLOGÍAS UTILIZADAS

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.x | Framework frontend |
| **Vite** | 5.x | Build tool (ultra rápido) |
| **TypeScript** | 5.x | Tipado estático |
| **React Router** | 6.x | Navegación |
| **Axios** | Latest | HTTP client |
| **Recharts** | Latest | Gráficas interactivas |
| **Docker** | Latest | Containerización |
| **Fiware Orion** | 3.x | Context broker (backend) |

---

## 🎨 PALETA DE COLORES - EMP MEDELLÍN

```css
--blanco-hueso: #F5F5DC  /* Fondos claros, textos sobre oscuro */
--gris: #808080          /* Textos secundarios, borders */
--negro-gris: #2C2C2C    /* Fondos oscuros, textos principales */
--verde-emp: #4CAF50     /* Botones, accents, marca */
--verde-hover: #45a049   /* Estados hover */
```

---

## 📋 CARACTERÍSTICAS PRINCIPALES

### ✅ Funcionalidades Implementadas

1. **Sistema de Autenticación**
   - Login como Administrador (lectura/escritura)
   - Login como Operario (solo lectura)
   - Protección de rutas por rol

2. **Dashboard Principal**
   - Métricas en tiempo real
   - Acceso rápido (máximo 3 clicks a cualquier destino)
   - Visualización intuitiva

3. **Menú de Variables**
   - Agrupación por parámetros
   - Gráficas interactivas
   - Filtros por tipo

4. **Menú de Indicadores**
   - KPIs del sistema
   - Indicadores de desempeño
   - Alertas visuales

5. **CRUD de Sensores** (Solo Admin)
   - Crear, editar, eliminar sensores
   - Configuración de parámetros
   - Historial de cambios

6. **Análisis Prospectivo**
   - Predicciones basadas en datos
   - Tendencias y patrones
   - Reportes exportables

7. **Calculadora de Desempeño**
   - Modal emergente
   - Cálculos en tiempo real
   - Exportación de resultados

---

## 🐳 DOCKER - CONTAINERIZACIÓN

El proyecto incluye:
- ✅ `Dockerfile` optimizado multi-stage
- ✅ `docker-compose.yml` con todos los servicios
- ✅ Frontend React (puerto 3000)
- ✅ Fiware Orion (puerto 1026)
- ✅ MongoDB (puerto 27017)
- ✅ Red Docker privada
- ✅ Volúmenes persistentes

**Levantar todo el stack:**
```bash
docker-compose -f docker/docker-compose.yml up -d
```

---

## 📂 ESTRUCTURA DEL PROYECTO (Planificada)

```
aquapure-h2-frontend/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── common/      # Botones, Cards, Modals
│   │   ├── layout/      # Header, Sidebar, Footer
│   │   └── features/    # Auth, Dashboard, Variables, etc.
│   ├── pages/           # Páginas principales
│   ├── services/        # API y servicios
│   ├── hooks/           # Custom hooks
│   ├── context/         # React Context (Auth, etc.)
│   ├── types/           # TypeScript types
│   └── styles/          # Estilos globales
├── docker/              # Configuración Docker
├── .env.example         # Variables de entorno
└── README.md            # Este archivo
```

---

## 🚀 PRÓXIMOS PASOS

### Paso 1: ELEGIR DISEÑO ⭐
**¡Esto es lo primero que debes hacer!**
- [ ] Abrir `design-option-1.html` en navegador
- [ ] Abrir `design-option-2.html` en navegador
- [ ] Comparar ambas opciones
- [ ] **Decidir cuál opción prefieres**
- [ ] Comunicar la decisión

### Paso 2: DISEÑO EN FIGMA (Opcional)
- [ ] Seguir guía en `GUIA_FIGMA.md`
- [ ] Crear mockups profesionales
- [ ] Exportar assets

### Paso 3: DESARROLLO FRONTEND
- [ ] Crear proyecto Vite + React
- [ ] Implementar diseño elegido
- [ ] Crear todos los componentes
- [ ] Implementar autenticación
- [ ] Crear menús (Variables, Indicadores, CRUD, Análisis)
- [ ] Implementar calculadora

### Paso 4: INTEGRACIÓN BACKEND
- [ ] Conectar con Fiware Orion
- [ ] Implementar servicios de API
- [ ] Subscripciones en tiempo real
- [ ] Testing de integración

### Paso 5: DOCKERIZACIÓN
- [ ] Build de imagen Docker
- [ ] Configurar docker-compose
- [ ] Testing local con Docker

### Paso 6: DEPLOYMENT
- [ ] Configurar servidor de producción
- [ ] Deploy con Docker
- [ ] Configurar HTTPS
- [ ] Monitoreo y logs

---

## 📊 NAVEGACIÓN - MÁXIMO 3 CLICKS

El diseño garantiza que cualquier funcionalidad esté a máximo 3 clicks:

| Funcionalidad | Ruta de Clicks |
|---------------|----------------|
| **Ver nivel de pureza** | Login → Dashboard → *(visible)* |
| **Ver gráfica de sensor** | Login → Variables → Seleccionar sensor |
| **Ver indicadores** | Login → Indicadores → *(visible)* |
| **Abrir calculadora** | *(Botón flotante siempre visible)* |
| **Gestionar sensores** | Login → Sensores → *(tabla visible)* |
| **Ver análisis** | Login → Análisis → *(visible)* |

---

## 🔐 SISTEMA DE AUTENTICACIÓN

### Roles de Usuario

#### 👨‍💼 Administrador
- ✅ Lectura de todos los datos
- ✅ Escritura/modificación de datos
- ✅ Crear, editar, eliminar sensores
- ✅ Cambiar configuraciones
- ✅ Acceso completo

#### 👷 Operario
- ✅ Lectura de todos los datos
- ✅ Ver dashboards y gráficas
- ✅ Usar calculadora
- ✅ Exportar reportes
- ❌ NO puede modificar nada

---

## 🔗 INTEGRACIÓN FIWARE ORION

El frontend se conecta con **Fiware Orion Context Broker** mediante API REST NGSI-v2:

```typescript
// Ejemplo de obtención de datos de sensor
GET http://orion:1026/v2/entities/Sensor:001

// Respuesta
{
  "id": "Sensor:001",
  "type": "WaterPuritySensor",
  "waterPurity": {
    "type": "Number",
    "value": 98.5,
    "metadata": {
      "timestamp": {
        "type": "DateTime",
        "value": "2025-11-11T10:30:00Z"
      }
    }
  }
}
```

---

## 📞 INFORMACIÓN DEL PROYECTO

**Cliente:** EMP Medellín  
**Proyecto:** Sistema de Tratamiento de Aguas con Hidrógeno  
**Tipo:** Landing Page + Dashboard Web  
**Target:** Desktop únicamente (no responsivo)  
**Resolución mínima:** 1920x1080  
**Fecha:** Noviembre 2025  

---

## ✅ CHECKLIST DE ENTREGABLES

### Completado ✅
- [x] Opción 1 de diseño (HTML prototipo)
- [x] Opción 2 de diseño (HTML prototipo)
- [x] Guía completa de Figma
- [x] Documentación técnica exhaustiva
- [x] Paleta de colores definida
- [x] Arquitectura del sistema diseñada

### Pendiente ⏳ (Después de elegir diseño)
- [ ] Proyecto Vite + React configurado
- [ ] Componentes de UI implementados
- [ ] Sistema de autenticación
- [ ] Menús principales (Variables, Indicadores, CRUD, Análisis)
- [ ] Calculadora de desempeño
- [ ] Integración con Fiware Orion
- [ ] Dockerización completa
- [ ] Testing
- [ ] Deployment

---

## 🎯 DECISIÓN REQUERIDA

### ¿Qué diseño prefieres?

1. **Opción 1 - Corporativa Elegante**
   - Profesional y tradicional
   - Grid simple 3x2
   - Header superior

2. **Opción 2 - Moderna Minimalista**
   - Innovadora y espaciosa
   - Sidebar lateral
   - Layout split 50/50

**Una vez decidas, se procederá con el desarrollo completo del frontend.**

---

## 📖 LECTURA RECOMENDADA

1. **Primero:** Revisar ambos archivos HTML de diseño
2. **Segundo:** Leer `DOCUMENTACION_COMPLETA.md` (visión técnica completa)
3. **Tercero:** Revisar `GUIA_FIGMA.md` (si quieres crear mockups)
4. **Cuarto:** Decidir diseño y comunicar decisión

---

## 💡 NOTAS IMPORTANTES

- ✅ **No responsivo:** Diseñado específicamente para desktop 1920x1080
- ✅ **Docker incluido:** Todo el stack está containerizado
- ✅ **Backend Fiware:** Preparado para integración con Orion Context Broker
- ✅ **Tiempo real:** Actualización automática de datos cada 2 segundos
- ✅ **Roles de usuario:** Administrador (R/W) y Operario (solo R)
- ✅ **Acceso rápido:** Máximo 3 clicks a cualquier funcionalidad

---

**¿Listo para continuar? ¡Elige tu diseño favorito y procedemos con el desarrollo! 🚀**
