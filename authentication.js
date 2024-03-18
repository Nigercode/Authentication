 

const fs = require("fs")
const path = require ("path")



 const userDbPath = path.join(__dirname, "database", "users.json")
 console.log(userDbPath)
function allUsers(){
    return new Promise((resolve, reject) => {
        fs.readFile(userDbPath,'utf8',(err,data) =>{
            if(err){
                reject (err)}

                resolve(JSON.parse(data))
        })
    
            
    
    })

    

}


  async function authenticate(req,res,){
    
    const users = await allUsers()
     console.log(users)
     return new Promise((resolve, reject) => {
        if (!req.headers.username){

        reject('pls provide username and password')
        
      }
      const user = users.find((user) => {return user.username === req.headers.username})
   if (!user){
        reject('user not found, pls sign up')
    
    }
    else if (user.password !== req.headers.password){
        reject('enter valid password')
    
        }
        resolve()
        
     })


  }
  

module.exports = {authenticate}