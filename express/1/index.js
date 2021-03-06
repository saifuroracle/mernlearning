const express = require('express');
const path = require('path')
const app = express();
const logger = require("./middleware/logger")

// init middlware
app.use(logger);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/members', require('./routes/api/members'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
