#!/bin/bash
set -x

DEST="/home/ec2-user/app"

# Borra contenido previo
rm -rf "$DEST"
mkdir -p "$DEST"

# Copiar desde el directorio actual (paquete CodeDeploy)
# Solo copiamos los archivos y carpetas esperadas
cp -r index.html static asset-manifest.json manifest.json robots.txt "$DEST/"
