const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/index.html', (req,res)=>{
    res.sendFile(__dirname + "/"+ "index.html")
})

app.get('process_get',(req,res)=>{
    const response ={
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }

    console.log(response,'-->response')

    res.end(JSON.stringify(response))
})

const server =  app.listen(8000,()=>{
    console.log(server,'server')
    const host = server.address().address
    const port =  server.address().port

    console.log("Example app listening at http://%s:%s", host, port)  
})