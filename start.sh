#!/bin/bash
set -x

cd /home/ec2-user/app || exit 1

# Inicia http-server en segundo plano, redirige salida para debug
nohup npx http-server -p 3000 > http-server.log 2>&1 &
