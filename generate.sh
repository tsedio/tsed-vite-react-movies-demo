# clean up
rm -rf project

npx create-nx-workspace@latest project --preset=npm --nxCloud=false
cd project

# remove files
rm -rf .vscode

# install dependencies
npm install -g @tsed/cli

# create server package
mkdir ./packages/server
cd ./packages/server

tsed init --package-manager=npm --project-name=server --features=swagger,jest,mongoose --arch=default --convention=conv_default --platform=express --skip-prompt .
npm install --save vite-plugin-ssr vite

cd ../..

# create app package

mkdir ./packages/app
cd ./packages/app

npm init vite-plugin-ssr@latest . -y --skip-git -- --boilerplate react-ts

rm -rf server
