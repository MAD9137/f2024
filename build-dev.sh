cp -f ./docs/.vuepress/config-dev.js ./docs/.vuepress/config.js
# abort on errors
set -e

# Dev Build
echo "### BUILDING FOR DEV... ###"
yarn docs:dev
echo "### DONE! ###"
echo