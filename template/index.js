const fs = require('fs');

const text = fs.readFileSync('../fileread/info.txt', 'utf-8');

console.log(`This is from a file text = ${text}`)
