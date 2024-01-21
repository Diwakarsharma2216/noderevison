const fs = require('node:fs');
let data=fs.readFileSync("./diwa.txt",{encoding:"utf-8"})
try {
    console.log(data)
} catch (error) {
    console.log(error)
}



