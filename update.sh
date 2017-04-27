#!/bin/bash -f
echo "Type Commit Message:"
read commit_message

git add .
git commit -m $commit_message
git push

echo "Type AWS SSH Password"
read password
spawn ssh bleachercreature@34.223.254.57
expect "assword:"
send $password
interact
cd ImagArenaPhotoFace
git pull
cd client
npm run dist
echo "Updated Server"
