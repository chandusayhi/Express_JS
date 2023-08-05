const express = require('express');
const app = express();
const path = require("path")

const hostname = "127.0.0.1";
const port = 5000;

app.use('/profile', require('./router/apiRouter'));


app.listen(port, hostname, ()=>{
    console.log(`Express server is started at http://${hostname}:${port}`);
});