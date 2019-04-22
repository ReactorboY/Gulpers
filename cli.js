#!/usr/bin/env node
const chalk = require('chalk');
const files = require('./lib/files');

const [,,  ...args] = process.argv;

const run = async () => {
    if (files.fileExist('gulpfile.js')) {
        console.log(chalk.red(`File Already Exist\n 
    Instead use gulpers sass to compile the sass -> css`));
    } else {
        files.createFile();
    }
    if(args[0] == 'sass') {
        console.log(args[0]);
    }
}

// console.log(`Hello ${args}`);

run();