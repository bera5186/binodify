const fs = require('fs')

function readFileBinod(file) {
    console.log('Binod *_* !!')

    fs.readFile(file, 'utf8', (err, data) => { 
        if (err) throw err;   
        
        if(data.includes('binod')) {
            console.log('Binod Found in file')
        }
    }); 
    
}
module.exports = readFileBinod