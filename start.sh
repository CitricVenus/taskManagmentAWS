#!/bin/bash
set -x

# Cambia a un directorio válido antes de ejecutar nada
cd /home/ec2-user/app || exit 1

# Levanta el servidor http y redirige logs correctamente
nohup npx http-server -p 3000 > /tmp/server.log 2>&1 &
