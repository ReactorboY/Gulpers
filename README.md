# Gulpers
Gulpers is a automatic task runner initiatot to be used for doing the compilation and refreshing the broswer everytime a file changes.

## What It can do >  

### Sass Automatic Compilation  

1. Compile Sass -> main.css   
2. Autoprefix css fall-behind property upto 2 previous browsers

## How to use

    npm i --save-dev gulpers

#### In your main.js / server.js / index.js file
 
    const gulpers = require('gulpers');
    gulpers.checkFile();

