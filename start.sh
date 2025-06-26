#!/bin/bash
cd /home/ec2-user/app

# Arranca http-server en background, redireccionando logs para evitar que el proceso bloquee
nohup npx http-server -p 3000 > server.log 2>&1 &
