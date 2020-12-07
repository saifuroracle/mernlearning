const express = require('express');
const path = require('path')
const app = express();
const logger = require("./middleware/logger")
const members = require("./data/members")

// init middlware
app.use(logger);

app.get('/api/members', (req, res) => {
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    
    res.json(
        members.filter(member =>
            member.id == req.params.id
        )
    );
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});