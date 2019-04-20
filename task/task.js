const fs = require('fs');

const filePath = process.cwd();

//  tasks
const tasks = [{
        id: 'sassi',
        name: 'sass',
        moduleName: 'gulp-sass'
    },
    {
        id: 'reload',
        name: 'broswerSync',
        moduleName: 'browser-sync'
    }
];

const folders = {
    src: 'src/',
    build: 'public/'
}

const gulping = `const gulp = require('gulp');\n`;

// checkFile module
const checkFile = () => {
    fs.access(filePath+'/gulpfile.js', fs.F_OK, (err) =>{
        if (err) {
            fs.writeFile(`${filePath}/gulpfile.js`, gulping, (err) => {
                if (err) throw err;
                console.log('Your gulpfile is created');
                return addModules();
            })
        }
        else {
            if(fs.statSync(filePath+'/gulpfile.js').size > 0){
                console.log('Already data is present');
                return writeTest();
            }
            else addModules();
        }
    })
}


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
    fs.readFile(filePath+'/gulpfile.js','UTF-8',(err, data) => {
        if (err) throw err;
        return processFile(data);
    })
}

const mySass = {
    name:tasks[0].name,
    content: 
    `
    gulp.task(\`${tasks[0].id}\`, () => {
       return gulp.src(\`${folders.src}\`+ 'sass/main.scss') 
        .pipe(sass({
            outputStyle:'nested',
            precision:3,
            errLogToConsole: true
        }))
        .pipe(gulp.dest(\`${folders.build}\`+ 'css/'))
    })
    `
}
    

const processFile = (data) => {
    if (!data.match(mySass.name)){
        console.log('Task is Already present');
        return fs.appendFile(filePath+'/gulpfile.js', mySass.content, err => {if (err) throw err})
    }
    // console.log('Great Work');
}

module.exports = {
    checkFile
};