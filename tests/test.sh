#!/usr/bin/env bash

# Added this here so if linting fails, then the script should return a
# non-zero exit code.
set -eo pipefail

if ! [ -d "node_modules" ]; then
    # run npm install to install dependencies
    yarn install
fi

# Run a lint check
yarn lint

# Run unit tests
NODE_ENV=testing ./node_modules/.bin/jest ./**/*.spec.js

echo ''
echo ''
echo '======================================================================='
echo ''
echo ' 💪  All your tests passed!!!! 😎 💃 '
echo ''
echo '======================================================================='
echo ''
echo ''

# send coverage if environment is circleCI
if [ $1 == 'CI' ]; then
  echo 'Sending coverage to codecov'
  yarn report
fi

# if everything works fine, then ensure the scripts return a success code
exit 0
