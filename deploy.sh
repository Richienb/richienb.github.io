#!/usr/bin/env bash
cp -rf dist/* .
git add .
git commit -m "CI | Updated the website [skip ci]"
git push origin HEAD:master
