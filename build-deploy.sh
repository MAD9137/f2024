# Dev Build
echo "### BUILDING FOR DEPLOY... ###"

yarn docs:build
cd docs/.vuepress/dist
git init
git add .
NOW=$(date +"%Y.%m.%d@%T")
git commit -m 'Deployed on '$NOW
git remote add origin git@github.com:MAD9137/f2024.git
git branch -M main
git push --set-upstream --force git@github.com:MAD9137/f2024.git main
cd ..
rm -rf dist

echo "### DONE! ###"
echo A brand new site has been generated: https://MAD9137.github.io/f2024/