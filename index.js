var express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const userroutes =  require('./routes/user')



const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("it works!!")
})

app.use('/data', userroutes)

  
app.listen(3001,() => {console.log("server started on port 3001")});