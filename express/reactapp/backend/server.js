const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");


require('dotenv').config()

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json( ));


// mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb successfully connected!'); 
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

