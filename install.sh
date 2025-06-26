#!/bin/bash
set -x  # Muestra los comandos mientras se ejecutan, útil para debug

# Asegura que npm esté disponible en el entorno del CodeDeploy
export PATH=$PATH:/usr/bin:/usr/local/bin

# Ir a la carpeta donde se desplegó el código
cd /home/ec2-user/app

# Instalar dependencias y construir el proyecto
npm install
npm run build
