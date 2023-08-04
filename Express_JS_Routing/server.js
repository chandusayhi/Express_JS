const express = require("express");
const app = express();
const path = require("path")

const hostname = "127.0.0.1";
const port = 5000;

app.get('/', (request, response) => {
    response.send(`<h2 style={color : red}>Welcome to Express Server</h2>`)
});

app.listen(port, hostname, ()=>{
    console.log(`Express server is started at http://${hostname}:${port}`);
});