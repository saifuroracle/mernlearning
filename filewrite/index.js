const fs = require('fs');

fs.writeFileSync('./output.txt', 'Hello world. '+Date.now())
