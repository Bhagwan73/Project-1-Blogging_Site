const bodyParser = require('body-parser')
const express= require('express')
const mongoose = require('mongoose')
const route=require('./route/route')

const app=express()
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/sarwjeet43', {useNewUrlParser: true})
.then(()=> console.log("MongoDB connected"))
.catch((error)=> console.log(error))

app.use('/',route)

app.listen(3000,function (){
   console.log("Port connected to 3000")
})  



