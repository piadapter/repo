#!/bin/bash

timestamp=$(date +%s)

file=$1

#echo "Tear down previous session.."
yarn stop

cp /tmp/nordic/log.txt ./logs/logs-$timestamp.txt
echo "" > /tmp/nordic/log.txt

#echo "Starting new session"
#echo "Looking for a devices"
#yarn devices

yarn start $file >> /tmp/nordic/log.txt
