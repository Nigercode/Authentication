const http = require('http')
const path = require ('path')
const fs = require('fs')
const {authenticate}  = require("./authentication")

const {getAllBooks} = require("./reqhandlers")
const { createBook} = require ("./reqhandlers");
const {updateBook} = require("./reqhandlers")
const {deleteOneBook} = require("./reqhandlers")


const { createAuthor} = require ("./reqhandlers");
const {getAllAuthors} = require("./reqhandlers")
const {updateAuthor} = require("./reqhandlers")
const {deleteOneAuthor} = require("./reqhandlers")

const port = "4005";
const hostname = "localhost"
 
const server = http.createServer(reqHandler);

async function reqHandler(req,res,){ 
res.setHeader( 'content-type', "application/json");
   if (req.url === "/books" && req.method === "GET"){
      authenticate(req,res)
   .then(()=>{getAllBooks(req,res)})
   .catch((err)=>{
      res.writeHead(400)
      res.end(err)
   })
  }
  else if (req.url.startsWith ("/books" ) && req.method === "POST"){//updateBook(req,res)
   authenticate(req,res)
.then(()=>{createBook(req,res)})
.catch((err)=>{
   res.writeHead(400)
   res.end(err)
})
  
 }
   else if (req.url.startsWith ("/books" ) && req.method === "PUT"){//updateBook(req,res)
      authenticate(req,res)
   .then(()=>{updateBook(req,res)})
   .catch((err)=>{
      res.writeHead(400)
      res.end(err)
   })
     
    }
    else if (req.url.startsWith ("/books")&& req.method === "DELETE"){   //deleteOneBook(req,res)
      authenticate(req,res)
   .then(()=>{deleteOneBook(req,res)})
   .catch((err)=>{
      res.writeHead(400)
      res.end(err)
   })
   
    }
    else if (req.url.startsWith ("/books/authors")&& req.method === "GET"){//getAllAuthors(req,res);
    
    authenticate(req,res)
   .then(()=>{getAllAuthors(req,res)})
   .catch((err)=>{
      res.writeHead(400)
      res.end(err)
   })
  
    }
    else if (req.url.startsWith ("/books/authors") && req.method === "POST"){//createAuthor(req,res)
    authenticate(req,res)
   .then(()=>{createAuthor(req,res)})
   .catch((err)=>{
      res.writeHead(400)
      res.end(err)
   })

    }
    else if (req.url.startsWith ("/books/authors") && req.method === "PUT"){  //deleteOneAuthor(req,res)
      authenticate(req,res)
     .then(()=>{updateAuthor(req,res)})
     .catch((err)=>{
        res.writeHead(400)
        res.end(err)
     })
      }        
    else if (req.url.startsWith ("/books/authors") && req.method === "DELETE"){  //deleteOneAuthor(req,res)
    authenticate(req,res)
   .then(()=>{deleteOneAuthor(req,res)})
   .catch((err)=>{
      res.writeHead(400)
      res.end(err)
   })
    }           
    else{

    res.end('Route not supported ')
   }
}

server.listen(port, hostname, ()=> { console.log (`server is listening at http://${hostname}:${port}`)
})


