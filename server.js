const express = require("express")
const morgan = require("morgan")
const server = express()
const mongo = require("mongoose")


server.use(express.urlencoded({extended:true}))

server.set('view engine','ejs')
server.use(morgan("dev"))
server.use(express.static('public'))

db_url = "mongodb+srv://paul:YHGO9ErRbOwWsui4@cluster0.qcajmng.mongodb.net/"
mongo.connect(db_url)
    .then((result)=>{
        server.listen(4000);
        console.log('connexion reussir');
    })
    .catch((err)=>{
        console.log(err);
    })


server.get("/",(req,res)=>{
    res.render('index')
})
server.get("/Admin",(req,res)=>{
    res.render('Admin')
})
