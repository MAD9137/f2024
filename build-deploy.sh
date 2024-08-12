# Dev Build
echo "### BUILDING FOR DEPLOY... ###"

yarn docs:build
cd docs/.vuepress/dist
git init
git add .
NOW=$(date +"%Y.%m.%d@%T")
git commit -m 'Deployed on '$NOW
git remote add origin git@github.com:AlgonquinCollegeMAD/MAD9137-notes.git
git branch -M main
git push --set-upstream --force git@github.com:AlgonquinCollegeMAD/MAD9137-notes.git main
cd ..
rm -rf dist

echo "### DONE! ###"
echo A brand new site has been generated: https://AlgonquinCollegeMAD.github.io/MAD9137-notes/