const fs = require('fs');
const path = require('path');

module.exports = {
    getCurrentDir: () => {
        return path.basename(process.cwd());
    },

    fileExist: (fileName) => {
        try {
            return fs.statSync(fileName);
        }
        catch (err) {
            return false;
        }
    },

    createFile: () => {
        fs.writeFile('gulpfile.js', '' , (err) => {
            if (err) throw err;
            console.log('File Created successfully');
        })
    }
}