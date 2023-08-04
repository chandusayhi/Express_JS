const express = require("express");
const app = express();
const path = require("path")

const hostname = "127.0.0.1";
const port =5000;

app.get('/',(request,response) => {
    response.send(`<h2> Welcome to Express JS</h2>`);
});

app.get('/home', (request,response) => {
    response.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});