#!/bin/bash
echo "Type Commit Message:"
read commit_message

git add .
git commit -m $commit_message
git push

ssh -i /Users/TimMerle/.ssh/id_rsa bleachercreature@34.223.254.57
cd ImagArenaPhotoFace
git pull
cd client
npm run dist
echo "Updated Server"
