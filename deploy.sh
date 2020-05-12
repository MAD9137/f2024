#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# Upload the whole site to the private personal repo
git pull origin master
git add -A 
git commit -m 'course update'
# REPLACE NEXT LINE with your own private repo link
git push -f git@github.com:prof3ssorSt3v3/mad9137-f20.git master
#               git@github.com:lees1/mad9011-f20.git 

# Upload the public github.io coursebook version
# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
# REPLACE NEXT LINE with public link for coursebook repo
git push -f git@github.com:MAD9137/F2020.git master


cd -

