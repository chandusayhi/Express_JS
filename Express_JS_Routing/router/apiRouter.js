const express = require('express');
const { request } = require('http');
const path = require('path');
const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,'..','views', 'index.html'))
});


module.exports = router;