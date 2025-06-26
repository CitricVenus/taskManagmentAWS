#!/bin/bash
set -x

DEST=/home/ec2-user/app

mkdir -p "$DEST"

# Copia solo el contenido del directorio de despliegue (ya está en build/)
cp -r * "$DEST/"
