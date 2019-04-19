const fs = require('fs');

const filePath = process.cwd();
//  tasks
const tasks = [{
        id: 'sass',
        name: 'sass',
        moduleName: 'gulp-sass'
    },
    {
        id: 'reload',
        name: 'broswerSync',
        moduleName: 'browser-sync'
    }
];

const task = () => {
    const gulping = `const gulp = require('gulp');\n`;

    fs.writeFile(`${filePath}/gulpfile.js`, gulping,(err) => {
        if (err) throw err;
        console.log('Your gulpfile is created');
    })

    return addModules();
}

// create modules

const createModules = () => {
    let modules = [];
    for (let i = 0; i < 2;i++){
        modules.push(`const ${tasks[i].name} = require('${tasks[i].moduleName}');\n`)
    }
    return modules.join('');
}

const addModules = () => {
    fs.appendFile(`${filePath}/gulpfile.js`,createModules() , (err) => {
        if (err) throw err;
        console.log('Your data appended');
    })
    return writeTest();
}

const writeTest = () => {
    return true;
}

module.exports = {
    task
};