const express=require("express")

const fs=require("fs")
const { join } = require("path")

const app=express()

app.use(express.json())

// >>>>>>>>>>>>>>> Bacis Exmaple >>>>>>>>>>>>>>>>>>

// app.get("/",(req,res)=>{
// res.send("Home Page")
// })

// app.post("/add/blog",(req,res)=>{
//     res.send("blog is added succesfuly")
// })


app.get("/user",(req,res)=>{
  
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"})

    res.send(data)

})


app.post("/user/add",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json",{encoding:"utf-8"}))
    
    data.push(JSON.stringify(req.body))

    fs.writeFileSync("./db.json",data)

   
})

app.listen(8080,()=>{
    console.log("server is Runing at 8080")
})