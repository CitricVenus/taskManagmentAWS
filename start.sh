#!/bin/bash
set -x

cd /home/ec2-user/app || exit 1

# Iniciar servidor sin intentar escribir logs si no tienes permisos
nohup npx http-server -p 3000 > /dev/null 2>&1 &
