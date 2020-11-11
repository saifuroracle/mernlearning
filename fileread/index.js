const fs = require('fs')

const text = fs.readFileSync('./info.txt', 'utf-8')

console.log(text)