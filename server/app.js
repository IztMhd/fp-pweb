const express = require('express');
const cors = require('cors');
const app = express();
const admin = require('firebase-admin');
const credentials = require('./api.json');
// it can be like this
// const app = require('express')();
const path = require('path');
app.use(cors()); 

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// create document in collection
app.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        //const id = req.body.email;
        const userJson = {
            playlist: req.body.playlist,
        }
        const response = db.collection("users").add(userJson);
        res.send(response);
    } catch(error){
        res.send(error);
    }
})
//get all data
app.get('/read', async(req,res) => {
    try {
        const userRef = db.collection("users");
        const response = await userRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error){
        res.send(error);
    }
})
//get data by param
app.get('/read/:id', async(req,res) => {
    try {
        //let id = req.params.id;
        const userRef = db.collection("users");
                                    // where("nomor", "==" id)
        const response = await userRef.get();
        res.send(response.data());
    } catch(error){
        res.send(error);
    }
})

//update data
app.post('/update', async(req,res) => {
    try{
        const id=req.body.id;
        const newContent = "Main dota2 5 jam"
        // yang dimasukin di jsonnya id documentnya
        const userRef = await db.collection("users").doc(id)
        .update({
            content: newContent
        });
        res.send(response);
    } catch(error){
        res.send(error);    
    }
})

//delete data
app.delete('/delete/:id', async (req, res) => {
    try{
        //req.params.id itu id yg dimasukin diroutenya
        const response = await db.collection("users").doc(req.params.id).delete(); 
        res.send(response);
    } catch(error){
        res.send(error);    
    }
})

const db = admin.firestore();

app.listen(8082, ()=>{
    console.log('server is listening on port 8082...');
})