const fs = require('fs')

fs.readFile('./start.txt', 'utf-8',(err, data1) => {
    if (err) {
        return console.log('error !')
    }
    fs.readFile(`./${data1}`, 'utf-8',(err, data2) => {
        console.log(data2)
        fs.writeFile('error-log.txt', `${data1}\n${data2}`,'utf-8', (err, data3) => {
            console.log('Your file has been written')
        })
    })
})

console.log('will read file')