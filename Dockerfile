# Imagen base
FROM node:latest

# Directorio de trabajo
WORKDIR /taskslist

# Copiar archivo de dependencias y archivo de bloqueo de versiones
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto que utiliza tu aplicación
EXPOSE 3000

# Comando de inicio
CMD ["npm", "run", "dev"]