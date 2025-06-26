#!/bin/bash
set -x

cd /home/ec2-user/app

# Ejecutar http-server en segundo plano, redirigiendo stdout y stderr a archivos de log
nohup http-server -p 3000 > server.log 2>&1 &
