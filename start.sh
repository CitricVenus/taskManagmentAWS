#!/bin/bash
set -x

cd /home/ec2-user/app || exit 1

# Levanta http-server en background y manda logs a /tmp/server.log
nohup npx http-server -p 3000 > /tmp/server.log 2>&1 &
