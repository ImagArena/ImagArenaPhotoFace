#!/bin/bash
echo "Type Commit Message:"
read commit_message

git add .
git commit -m $commit_message
git push

ssh -i /Users/Elliot/Downloads/Elliot_Key.pem ubuntu@34.223.254.57 < rebuild.sh
