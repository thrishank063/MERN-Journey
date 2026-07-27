const express = require('express');
const app = express();
app.get('/', (request, response) =>{
    response.send("Hello");
})
app.get('/thrishank', (request, response) => {
    response.send("Welcome to my page Thrishank")
})
app.listen(3000);