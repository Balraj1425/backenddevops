var express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const userroutes =  require('./routes/user')



const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


app.get("/",(req,res)=>{

    res.send("it works!!")

})

app.use('/data', userroutes)

  
app.listen(3000,() => {console.log("server started on port 3000")});