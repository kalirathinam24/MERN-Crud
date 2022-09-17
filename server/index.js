const express = require('express');
const mongoose =require('mongoose')
const app = express();
const morgan = require('morgan')
const cors = require('cors')


//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())




//Router
const infoRouter =require("./router")
app.use('/info', infoRouter);


//listent port
app.listen(5000,()=>{
    console.log("Server started on 5000");
})

//DB connection 
mongoose.connect("mongodb://localhost:27017/myApp",{useNewUrlParser:true, useUnifiedTopology:true} ,(err)=>{
       if(!err)
       {
        console.log("DB connected");
       }
})