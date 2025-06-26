#!/bin/bash
set -x

DEST=/home/ec2-user/app

mkdir -p "$DEST"

# Solo copiar archivos del bundle de CodeDeploy
cp -r ./* "$DEST"
