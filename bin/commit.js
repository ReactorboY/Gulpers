#! /usr/bin/env node

const shell = require('shelljs');

shell.exec("git add -A . && commit -a -m 'gh-pages-update'")