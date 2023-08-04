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

let models = [{brandID:1, id:1, name:'Swift'},{brandID:2, id:2, name:'alto'},{brandID:3, id:3, name:'balero'},{brandID:4, id:4, name:'Celerio'}];
app.get('/json',(request, response) => {
    response.json(models);
});

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});