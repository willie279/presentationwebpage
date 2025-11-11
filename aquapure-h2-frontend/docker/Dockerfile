# Dockerfile para AquaPure H₂ Frontend

# Etapa 1: Build
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Build de producción
RUN npm run build

# Etapa 2: Producción con Nginx
FROM nginx:alpine

# Copiar build de React desde etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (opcional)
# COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
