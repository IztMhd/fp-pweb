const express = require('express');
const cors = require('cors');
const app = express();
// it can be like this
// const app = require('express')();
const path = require('path');

app.use(cors()); 

app.listen(8082, ()=>{
    console.log('server is listening on port 8082...');
})