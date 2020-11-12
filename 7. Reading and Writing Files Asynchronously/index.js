const fs = require('fs')

const text = fs.readFile('./info.txt', 'utf-8',(err, data) => {
    console.log(data)
})

console.log('will read file')