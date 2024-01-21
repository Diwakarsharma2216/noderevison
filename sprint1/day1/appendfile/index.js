const fs=require("fs")


fs.appendFile("./diwa.txt","\nhey diwakar sharma",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log("data appended succsfully")
})