const fs=require("fs")


// it is asynchoruns 
// fs.writeFile("./diwa.txt","hey diwakar how are you?",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

let data=fs.writeFileSync("./diwa.txt","hey diwakar,let go to market")
try {
  console.log("data is write in diwa.txt file")  
} catch (error) {
    console.log(err)
}