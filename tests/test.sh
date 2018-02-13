#!/usr/bin/env bash

# Run a lint check
yarn lint

# Run unit tests
NODE_ENV=testing ./node_modules/.bin/jest ./**/*.spec.js
