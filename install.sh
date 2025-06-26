#!/bin/bash
set -x
DEST=/home/ec2-user/app
mkdir -p "$DEST"
cp -r ./* "$DEST/"
