const express = require('express');
const cors = require('cors');
const app = express();
// it can be like this
// const app = require('express')();
const path = require('path');
app.use(cors());

app.get('/', (req, res)=>{
    res.send({
        message: `Playlist ${req.body.playlist} is playing....`
    });
})

app.listen(8082, ()=>{
    console.log('server is listening on port 8082...');
})