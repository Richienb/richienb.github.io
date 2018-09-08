#!/usr/bin/env bash
cp -rf dist/* .
git commit -a -m "CI | Updated the website [skip ci]"
git push origin HEAD:master
