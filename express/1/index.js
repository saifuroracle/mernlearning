const express = require('express');
const { dirname } = require('path');
const path = require('path')
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.host + req.originalUrl}`)

    next();
}

// init middlware
app.use(logger);

app.get('/api/members', (req, res) => {
    const members = require("./data/members.js")
    res.json(members);
});


// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});