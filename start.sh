#!/bin/bash
set -x

cd /home/ec2-user/app

# Ejecutar el servidor en background y redirigir salida
nohup npx http-server -p 3000 > server.log 2>&1 &
