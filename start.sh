#!/bin/bash
set -x

cd /home/ec2-user/app

# Usa un servidor estático simple para servir la carpeta (ejemplo: http-server)
# Asegúrate que http-server esté instalado globalmente en la instancia, o usa otro servidor.

http-server -p 3000 &
