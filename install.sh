#!/bin/bash
set -x

DEST=/home/ec2-user/app

mkdir -p "$DEST"

# Copiar todo el contenido del directorio actual (artifact) al destino
# excluyendo carpetas ocultas (opcional)
cp -r ./* "$DEST/"
