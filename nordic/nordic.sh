#!/bin/bash

timestamp=$(date +%s)

path=$1
file=$2

#echo "Tear down previous session.."
yarn stop

cp $path ./logs/logs-$timestamp.txt
echo "" > $path

#echo "Starting new session"
#echo "Looking for a devices"
#yarn devices

yarn start $file >> $path
