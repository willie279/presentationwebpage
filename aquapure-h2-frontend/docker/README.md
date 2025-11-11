# 🐳 Docker - AquaPure H₂

## Servicios Incluidos

### 1. Frontend (React + Vite)
- **Puerto**: 3000
- **Imagen**: Custom build con Node 18 + Nginx
- **Descripción**: Aplicación React con Vite

### 2. Fiware Orion Context Broker
- **Puerto**: 1026
- **Imagen**: fiware/orion:3.10.1
- **Descripción**: Context Broker NGSI-v2 para gestión de datos en tiempo real

### 3. MongoDB
- **Puerto**: 27017
- **Imagen**: mongo:4.4
- **Descripción**: Base de datos para Fiware Orion
- **Volúmenes**: Datos persistentes

### 4. Mongo Express (Opcional)
- **Puerto**: 8081
- **Imagen**: mongo-express:latest
- **Descripción**: Interfaz web para administrar MongoDB
- **Credenciales**: admin / admin

---

## 🚀 Uso

### Levantar todos los servicios
```bash
cd aquapure-h2-frontend
docker-compose -f docker/docker-compose.yml up -d
```

### Ver logs
```bash
# Todos los servicios
docker-compose -f docker/docker-compose.yml logs -f

# Solo frontend
docker-compose -f docker/docker-compose.yml logs -f frontend

# Solo Orion
docker-compose -f docker/docker-compose.yml logs -f orion
```

### Detener servicios
```bash
docker-compose -f docker/docker-compose.yml down
```

### Detener y eliminar volúmenes
```bash
docker-compose -f docker/docker-compose.yml down -v
```

### Rebuild forzado
```bash
docker-compose -f docker/docker-compose.yml up -d --build --force-recreate
```

---

## 🔗 URLs de Acceso

- **Frontend**: http://localhost:3000
- **Fiware Orion**: http://localhost:1026
- **MongoDB**: localhost:27017
- **Mongo Express**: http://localhost:8081

---

## 🧪 Verificar Servicios

### Frontend
```bash
curl http://localhost:3000
```

### Fiware Orion
```bash
curl http://localhost:1026/version
```

### MongoDB
```bash
docker exec -it aquapure-mongo mongo --eval "db.adminCommand('ping')"
```

---

## 📊 Monitoreo

### Ver estado de contenedores
```bash
docker ps
```

### Ver uso de recursos
```bash
docker stats
```

### Health checks
```bash
docker inspect --format='{{.State.Health.Status}}' aquapure-frontend
docker inspect --format='{{.State.Health.Status}}' aquapure-orion
```

---

## 🛠️ Troubleshooting

### Problema: Puerto en uso
```bash
# Verificar qué está usando el puerto
lsof -i :3000
lsof -i :1026

# Matar proceso
kill -9 <PID>
```

### Problema: Frontend no se conecta a Orion
```bash
# Verificar red Docker
docker network inspect aquapure-network

# Verificar que Orion esté funcionando
docker logs aquapure-orion

# Probar conectividad desde el frontend
docker exec -it aquapure-frontend wget -O- http://orion:1026/version
```

### Problema: MongoDB sin datos
```bash
# Verificar volúmenes
docker volume ls

# Inspeccionar volumen
docker volume inspect aquapure-mongo-data

# Restaurar backup (si existe)
docker exec -i aquapure-mongo mongorestore --archive < backup.archive
```

### Limpiar todo y empezar de nuevo
```bash
docker-compose -f docker/docker-compose.yml down -v
docker system prune -a
docker-compose -f docker/docker-compose.yml up -d --build
```

---

## 🔐 Producción

### Variables de Entorno
Crear `.env.production` con:
```env
VITE_FIWARE_URL=https://orion.emp-medellin.com
VITE_API_URL=https://api.emp-medellin.com
VITE_APP_NAME=AquaPure H2
```

### Build para producción
```bash
docker build -t aquapure-frontend:prod -f docker/Dockerfile .
```

### Deploy con HTTPS
Usar Nginx reverse proxy o Traefik con Let's Encrypt

---

## 📦 Backup y Restauración

### Backup de MongoDB
```bash
# Crear backup
docker exec aquapure-mongo mongodump --out /data/backup

# Copiar backup al host
docker cp aquapure-mongo:/data/backup ./backups/$(date +%Y%m%d)
```

### Restaurar MongoDB
```bash
# Copiar backup al contenedor
docker cp ./backups/20251111 aquapure-mongo:/data/restore

# Restaurar
docker exec aquapure-mongo mongorestore /data/restore
```

---

## 🎯 Comandos Útiles

### Acceder a shell de contenedor
```bash
docker exec -it aquapure-frontend sh
docker exec -it aquapure-mongo mongo
```

### Limpiar imágenes no usadas
```bash
docker image prune -a
```

### Ver tamaño de imágenes
```bash
docker images
```

---

**Proyecto**: AquaPure H₂ - EMP Medellín  
**Última actualización**: 11 de Noviembre 2025
