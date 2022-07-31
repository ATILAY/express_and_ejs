const express =  require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const app =  express()

//setting the view engine as EJS
app.set('view engine','ejs')

// roots the view directory  to public
app.set('views','public')

//tells express that the public folder is the static folder
app.use(express.static("public"))

//home route
app.get("/",(req,res)=>{
    res.render("./pages/index")
})

//routing plot.ejs file
// this simply means calling localhost:3000/plot  will render  this page in our app
app.get("/plot",(req,res)=>{
    res.render("./pages/plot")
})

//routing  cast.ejs file
// calling localhost:3000/cast will render this page
app.get("/cast", (req,res)=>{
    res.render("./pages/cast")
})

// app.get("/", (req,res)=>{
//     res.send("welcome babysi")
// })

app.listen(3000,()=>{
    console.log("server started baby")
})