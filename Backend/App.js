const app = require('express')();
const express = require("express");
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require("cors");
app.use(bp.json());
app.use(cors());
const Server = require('./Server')
app.use('/api/',Server)
app.use(express.json());
// const cors=require("cors");
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
//  app.use(cors(corsOptions))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
mongoose.connect('mongodb+srv://sahaj:sahaj@authcluster.k1r8v.mongodb.net/vedxApp?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connected')
    app.listen(4000);
})
.catch((err) => {
    console.log(err)
})