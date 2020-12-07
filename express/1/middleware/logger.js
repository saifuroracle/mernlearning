const moment = require('moment')

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.hostname + req.originalUrl+':'+moment().format('MM-DD-YYYY hh:mm:ss a')}`)

    next();
}

module.exports = logger