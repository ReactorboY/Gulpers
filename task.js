const addModules = (name, mdl) => {
    let myModules = [];
    for (let i = 0; i < 2; i++){
        myModules.push(`const ${name[i]} = require('${mdl[i]}');\n`)
    }
    return myModules.join('');
}

module.exports = addModules;