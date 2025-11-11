# 🎨 GUÍA PASO A PASO PARA DISEÑAR EN FIGMA
## Proyecto: Landing Page de Tratamiento de Aguas con Hidrógeno - EMP Medellín

---

## 📋 TABLA DE CONTENIDOS
1. [Preparación Inicial](#preparación-inicial)
2. [Configuración del Proyecto](#configuración-del-proyecto)
3. [Paleta de Colores](#paleta-de-colores)
4. [Tipografía](#tipografía)
5. [Paso a Paso por Opción](#paso-a-paso-por-opción)
6. [Componentes Reutilizables](#componentes-reutilizables)
7. [Exportación y Entrega](#exportación-y-entrega)

---

## 1. PREPARACIÓN INICIAL

### 1.1 Crear Cuenta y Proyecto
1. Ir a [www.figma.com](https://www.figma.com)
2. Crear cuenta gratuita o iniciar sesión
3. Click en **"New Design File"**
4. Nombrar el proyecto: `"Landing Page AquaPure H2 - EMP Medellin"`

### 1.2 Configurar el Canvas
1. Presionar `F` para crear un **Frame**
2. En el panel derecho, seleccionar **Desktop** → **1920 x 1080**
3. Nombrar el frame: `"Desktop - 1920x1080"`

---

## 2. CONFIGURACIÓN DEL PROYECTO

### 2.1 Estructura de Capas Recomendada
```
📁 Landing Page AquaPure H2
  ├── 📄 Página: Opción 1 - Corporativa
  │   ├── 🖼️ Frame: Desktop - 1920x1080
  │   ├── 🎨 Paleta de Colores
  │   └── 📝 Componentes
  │
  ├── 📄 Página: Opción 2 - Moderna
  │   ├── 🖼️ Frame: Desktop - 1920x1080
  │   ├── 🎨 Paleta de Colores
  │   └── 📝 Componentes
  │
  └── 📄 Página: Componentes Generales
      ├── 🔘 Botones
      ├── 🃏 Cards
      ├── 📊 Iconos
      └── 🔐 Modal Login
```

### 2.2 Crear Páginas
1. Click derecho en el sidebar izquierdo
2. **"Add page"**
3. Crear 3 páginas:
   - `"Opción 1 - Corporativa Elegante"`
   - `"Opción 2 - Moderna Minimalista"`
   - `"Componentes y Assets"`

---

## 3. PALETA DE COLORES

### 3.1 Definir Estilos de Color (Color Styles)
1. Dibujar 5 rectángulos pequeños (50x50px)
2. Para cada rectángulo, aplicar los colores de la paleta
3. Con cada rectángulo seleccionado:
   - Click en el color en el panel derecho
   - Click en los 4 puntos (⋮⋮)
   - **"Create Style"**
   - Nombrar según la tabla

**Tabla de Colores EMP Medellín:**

| Nombre del Estilo | Código Hex | RGB | Uso |
|-------------------|------------|-----|-----|
| `Blanco Hueso` | `#F5F5DC` | `245, 245, 220` | Fondo principal, textos claros |
| `Gris` | `#808080` | `128, 128, 128` | Textos secundarios, borders |
| `Negro Gris` | `#2C2C2C` | `44, 44, 44` | Textos principales, fondos oscuros |
| `Verde EMP` | `#4CAF50` | `76, 175, 80` | Botones principales, accents |
| `Verde EMP Hover` | `#45a049` | `69, 160, 73` | Estados hover de botones |

### 3.2 Crear Paleta Visual
1. Crear un frame de 400x300px llamado `"Paleta de Colores"`
2. Colocar los 5 rectángulos con los colores
3. Agregar texto debajo de cada uno con:
   - Nombre del color
   - Código Hex
   - Uso principal

---

## 4. TIPOGRAFÍA

### 4.1 Fuentes Recomendadas
- **Principal:** `Inter` (disponible gratis en Google Fonts)
- **Alternativa:** `Segoe UI` (nativa en Windows)
- **Fallback:** `Roboto`

### 4.2 Crear Estilos de Texto (Text Styles)
1. Crear un rectángulo de texto (presionar `T`)
2. Con el texto seleccionado, configurar:
   - Fuente
   - Tamaño
   - Peso (weight)
   - Altura de línea (line height)
3. Click en los 4 puntos (⋮⋮) junto a "Text"
4. **"Create Style"**

**Tabla de Estilos de Texto:**

| Nombre | Fuente | Tamaño | Peso | Line Height | Uso |
|--------|--------|--------|------|-------------|-----|
| `H1 - Hero` | Inter | 64px | Bold (700) | 110% | Títulos principales |
| `H2 - Section` | Inter | 48px | SemiBold (600) | 120% | Títulos de sección |
| `H3 - Card Title` | Inter | 22px | SemiBold (600) | 130% | Títulos de tarjetas |
| `Body - Large` | Inter | 20px | Regular (400) | 160% | Texto descriptivo principal |
| `Body - Regular` | Inter | 16px | Regular (400) | 150% | Texto de tarjetas |
| `Caption` | Inter | 14px | Medium (500) | 140% | Textos pequeños, labels |
| `Button` | Inter | 16px | SemiBold (600) | 100% | Texto de botones |

---

## 5. PASO A PASO POR OPCIÓN

---

## 🏢 OPCIÓN 1: CORPORATIVA ELEGANTE

### Paso 1: Configurar el Frame Principal
1. Crear frame Desktop (1920x1080)
2. Aplicar fondo:
   - **Fill:** Linear Gradient
   - Color 1: `Negro Gris` (Opacity 92%)
   - Color 2: `Verde EMP` (Opacity 85%)

### Paso 2: Imagen de Fondo de la Planta
1. Arrastra tu imagen de la planta al canvas
2. Click derecho → **"Set as background"**
3. Ajustar opacidad de la imagen (30-40%)
4. Aplicar **Gaussian Blur** de 2-4px para efecto de profundidad

### Paso 3: Header Superior
1. Dibujar rectángulo 1920x90px en la parte superior
2. Fill: `Negro Gris` con opacity 95%
3. Agregar sombra:
   - Y: 4px
   - Blur: 20px
   - Color: Negro con 30% opacity

**Logo (Lado izquierdo):**
1. Círculo de 50x50px
2. Fill: `Verde EMP`
3. Texto "H₂" centrado (color: Blanco)
4. Al lado: Textos "AquaPure H₂" y subtítulo

**Botón Login (Lado derecho):**
1. Rectángulo redondeado: 150x44px
2. Border radius: 22px
3. Fill: `Verde EMP`
4. Texto: "Iniciar Sesión →" (Blanco)
5. Sombra suave (Y: 4px, Blur: 15px)

### Paso 4: Hero Section Central
1. Crear Auto Layout vertical centrado
2. Ancho: 1200px
3. Elementos:
   - **Título:** "Tecnología de Hidrógeno" (H1)
   - **Subtítulo:** Descripción (Body Large)
   - **Badge:** "EMP MEDELLÍN • Sistema Inteligente" (Caption, color: `Verde EMP`)

### Paso 5: Grid de Accesos Rápidos
1. Crear **Auto Layout** horizontal con wrap
2. Configuración:
   - Spacing: 30px
   - 3 columnas
   - Ancho total: 1200px

**Cada Tarjeta de Acceso:**
1. Rectángulo redondeado: 370x220px
2. Border radius: 15px
3. Fill: `Blanco Hueso` (95% opacity)
4. Sombra: Y: 8px, Blur: 25px
5. Padding interno: 40px

**Contenido de cada tarjeta:**
- Ícono circular (70x70px, `Verde EMP`)
- Título (H3, color: `Negro Gris`)
- Descripción (Body Regular, color: `Gris`)

**6 Tarjetas:**
1. 💧 Nivel de Pureza
2. 📊 Gráficas de Sensores
3. 📈 Indicadores
4. ⚙️ Variables del Sistema
5. 🔬 Análisis Prospectivo
6. 🛠️ Gestión de Sensores

### Paso 6: Botón Flotante de Calculadora
1. Círculo de 70x70px
2. Fill: `Verde EMP`
3. Position: Fixed bottom-right (40px desde bordes)
4. Ícono: "🧮" centrado
5. Sombra fuerte: Y: 8px, Blur: 25px

### Paso 7: Estados Interactivos (Prototyping)
1. Duplicar cada tarjeta
2. En la versión duplicada:
   - Aumentar Y: -10px (efecto elevación)
   - Border: 2px solid `Verde EMP`
   - Sombra más grande: Y: 15px, Blur: 40px
3. Modo **Prototype**:
   - Conectar tarjeta original → tarjeta hover
   - Trigger: **"While hovering"**
   - Animation: **"Smart animate"** 300ms

---

## 🚀 OPCIÓN 2: MODERNA MINIMALISTA

### Paso 1: Configurar el Frame Principal
1. Crear frame Desktop (1920x1080)
2. Fill: `Negro Gris`

### Paso 2: Sidebar Izquierdo
1. Rectángulo de 280x1080px (izquierda)
2. Fill: `Blanco Hueso` (98% opacity)
3. Sombra lateral: X: 4px, Blur: 25px
4. Position: Fixed

**Contenido del Sidebar:**
1. **Logo (arriba):**
   - Cuadrado redondeado 80x80px
   - Border radius: 20px
   - Fill: `Verde EMP`
   - Texto "H₂" centrado
   - Debajo: Título y subtítulo

2. **Línea divisora:**
   - Rectángulo 220x2px
   - Gradient: `Verde EMP` → Transparent

3. **Secciones de navegación:**
   - "Acceso Rápido" (Header Caption)
   - Items clicables con padding 12px
   - Border radius: 8px
   - Hover: Fill `Verde EMP`, texto Blanco

4. **Botón Login (abajo):**
   - Width: 100%
   - Height: 50px
   - Border radius: 10px
   - Fill: `Verde EMP`

### Paso 3: Área de Contenido Principal
1. Frame de 1640x1080px (derecha del sidebar)
2. Aplicar imagen de fondo con gradient overlay
3. Gradient:
   - Color 1: `Negro Gris` (95% opacity)
   - Color 2: `Verde EMP` (70% opacity)

### Paso 4: Hero Split Layout
1. Crear **Auto Layout** horizontal
2. 2 columnas (820px cada una)
3. Gap: 60px
4. Padding: 80px

**Columna Izquierda - Texto:**
1. **Título grande (H1):**
   - "Sistema Avanzado de"
   - "Tratamiento de Aguas" (color: `Verde EMP`)
   - "con Hidrógeno"

2. **Párrafo descriptivo** (Body Large)

3. **Estadísticas (Stats):**
   - Auto Layout horizontal
   - 3 items:
     - Número grande (42px, Bold, `Verde EMP`)
     - Label pequeño (Caption, `Gris`)
   - Ejemplos: "99.8% Pureza", "24/7 Monitoreo", "< 3 Clicks"

**Columna Derecha - Tarjetas:**
1. Grid de 2x3 (2 columnas, 3 filas)
2. Gap: 20px

**Tarjetas (2 pequeñas, 2 medianas, 1 grande):**
- Tamaño pequeño: 400x180px
- Tamaño grande: 820x200px (span 2 columns)
- Border radius: 20px
- Fill: `Blanco Hueso` (95% opacity)
- Padding: 35px 25px

**Contenido de cada tarjeta:**
- Header horizontal:
  - Ícono cuadrado 50x50px (`Verde EMP`)
  - Título (H3)
- Descripción (Body Regular)
- Flecha → (aparece en hover)

### Paso 5: Badge de Empresa (abajo izquierda)
1. Rectángulo con backdrop blur
2. Fill: `Blanco Hueso` (15% opacity)
3. Border: 1px, `Blanco Hueso` (20% opacity)
4. Border radius: 15px
5. Padding: 20px 30px
6. Texto: "Tecnología de Hidrógeno • EMP Medellín 2025"

### Paso 6: Botón Flotante de Calculadora
1. Círculo de 80x80px
2. Fill: Gradient circular
   - Centro: `Verde EMP`
   - Exterior: `Verde EMP Hover`
3. Position: Fixed bottom-right (40px desde bordes)
4. Ícono: "🧮" (36px)
5. Sombra: Y: 10px, Blur: 35px

### Paso 7: Efectos de Hover
1. Duplicar cada tarjeta para estado hover
2. Cambios en hover:
   - Transform: Y: -8px, Scale: 102%
   - Border: 2px solid `Verde EMP`
   - Flecha visible con translateX(5px)
3. Prototipo: **"While hovering"** → Smart animate 300ms

---

## 6. COMPONENTES REUTILIZABLES

### 6.1 Crear Componentes (Components)
Los siguientes elementos deben convertirse en componentes:

#### Botón Primario
1. Seleccionar el botón creado
2. Click derecho → **"Create Component"** (o Ctrl+Alt+K)
3. Nombrar: `"Button/Primary"`
4. Crear variantes:
   - Estado: Default, Hover, Pressed, Disabled

#### Card de Acceso
1. Seleccionar una tarjeta completa
2. Crear componente: `"Card/Access"`
3. Hacer el texto editable:
   - Seleccionar texto → Click derecho → **"Create Component Property"**
   - Type: **"Text"**

#### Ícono Circular
1. Crear componente: `"Icon/Circle"`
2. Variantes:
   - Size: Small (50px), Medium (70px), Large (80px)
   - Color: Verde, Gris, Personalizado

#### Modal de Login (Para después)
1. Crear frame 500x600px
2. Componente: `"Modal/Login"`
3. Incluir:
   - Header "Iniciar Sesión"
   - Radio buttons: Administrador / Operario
   - Inputs: Usuario, Contraseña
   - Botón: "Ingresar"

### 6.2 Organizar Componentes
1. Ir a la página **"Componentes y Assets"**
2. Colocar todos los componentes allí
3. Organizarlos en secciones:
   - Botones
   - Cards
   - Íconos
   - Modales

---

## 7. EXPORTACIÓN Y ENTREGA

### 7.1 Crear Mockups Finales
1. Duplicar frames finales
2. Nombrar:
   - `"Mockup - Opción 1 - Final"`
   - `"Mockup - Opción 2 - Final"`

### 7.2 Exportar Diseños
**Como imagen:**
1. Seleccionar frame
2. Panel derecho → **"Export"**
3. Formato: PNG a 2x (para calidad)
4. Click en **"Export Opción X"**

**Como PDF:**
1. File → Export frames to PDF
2. Seleccionar ambas opciones
3. Exportar

### 7.3 Compartir con el Equipo
1. Click en **"Share"** (arriba derecha)
2. Configurar: **"Anyone with the link can view"**
3. Copiar link
4. Compartir con desarrolladores y stakeholders

### 7.4 Modo Presentación
1. Click en el ícono de **Play** (▶️) arriba derecha
2. Modo: **"Present"**
3. Usar para mostrar las opciones al cliente

### 7.5 Developer Handoff
1. Seleccionar frame
2. Click en **"Dev Mode"** (arriba derecha)
3. Los desarrolladores verán:
   - Medidas exactas
   - Colores en código (Hex, RGB)
   - Espaciados
   - Tipografía
   - Assets para descargar

### 7.6 Exportar Assets
**Para el desarrollador, exportar:**
1. Logo (SVG)
2. Íconos (SVG o PNG 2x)
3. Imagen de fondo de la planta (JPG optimizado)

**Proceso:**
1. Seleccionar cada elemento
2. Panel derecho → Export
3. Formato: SVG (para vectores) o PNG 2x (para imágenes)
4. Nombrar con convención: `icon-water.svg`, `logo-h2.svg`

---

## 📝 CHECKLIST FINAL

### Antes de Presentar:
- [ ] Ambas opciones completadas
- [ ] Paleta de colores documentada
- [ ] Tipografía configurada con estilos
- [ ] Componentes creados y organizados
- [ ] Estados hover implementados
- [ ] Prototipo interactivo funcional
- [ ] Medidas verificadas (1920x1080)
- [ ] Exportaciones listas (PNG, PDF)
- [ ] Link de Figma compartible

### Para el Desarrollo:
- [ ] Dev Mode activado
- [ ] Assets exportados
- [ ] Colores en código Hex
- [ ] Fuentes especificadas
- [ ] Espaciados documentados

---

## 🎯 CONSEJOS PRO

1. **Usar Auto Layout siempre que sea posible:**
   - Facilita cambios posteriores
   - Responsive design más fácil (por si en el futuro se necesita)

2. **Constraints (Restricciones):**
   - Botón login: Right & Top
   - Sidebar: Left & Top & Bottom
   - Calculadora flotante: Right & Bottom

3. **Plugins Útiles de Figma:**
   - **"Unsplash"**: Para imágenes temporales
   - **"Iconify"**: Para íconos (💧, 📊, etc.)
   - **"Stark"**: Para verificar contraste de colores
   - **"Content Reel"**: Para texto placeholder

4. **Organización:**
   - Nombrar todas las capas claramente
   - Agrupar elementos relacionados
   - Usar Auto Layout para secciones complejas

5. **Performance:**
   - No usar demasiados blur effects (ralentiza)
   - Optimizar imágenes antes de importar
   - Usar componentes para elementos repetidos

---

## 📚 RECURSOS ADICIONALES

- **Figma Learn:** [help.figma.com](https://help.figma.com)
- **Tutoriales en español:** YouTube → "Figma tutorial español"
- **Comunidad Figma:** [www.figma.com/community](https://www.figma.com/community)
- **Google Fonts:** [fonts.google.com](https://fonts.google.com)

---

## ✅ PRÓXIMOS PASOS DESPUÉS DE FIGMA

1. **Aprobar diseño** con el equipo
2. **Exportar assets** necesarios
3. **Iniciar desarrollo** con Vite + React
4. **Implementar** en código el diseño elegido
5. **Dockerizar** la aplicación
6. **Conectar** con Fiware Orion backend

---

**Documento creado para:** Proyecto AquaPure H₂ - EMP Medellín  
**Fecha:** Noviembre 2025  
**Versión:** 1.0
