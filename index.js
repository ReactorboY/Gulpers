const fs = require('fs');
const task = require('./task/task');

const createFile = () => {
    return fs.writeFileSync(`${process.cwd()}/gulpfile.js`,task(['gulp', 'sass'],['gulp', 'gulp-sass']));
}

const gulpers = (name) => {
    return task(name);
}
module.exports = gulpers;