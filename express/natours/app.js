const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// routes starts
// routes starts
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-sample.json`))
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json(
        {
            status: 'success',
            data: tours
        }
    );
});
// routes ends
// routes ends

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
