const fs = require('fs');
const task = require('./task');

const createFile = () => {
    return fs.writeFileSync(`${process.cwd()}/gulpfile.js`,task(['gulp', 'sass'],['gulp', 'gulp-sass']));
}

const gulpers = () => {
    return 'Hi from Gulpers';
}
module.exports = {
    createFile
};