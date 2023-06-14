

const express = require('express');
const PORT = 8080;
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());


app.listen(PORT, () =>{
    console.log( `hola vicente estoy escuchando en puerto: ${PORT}`);
});

app.post("/user",(req, res)=>{
    //1) const body = req.body;
    const {name , email , password} = req.body;
    res.setHeader("Content-Type", "Application/json");
   //1)  res.send({body});
   res.send ({name, email, password: "****"});
   //2)  res.send(`Los datos que enviaste son:${name}, ${email}`)
});

app.get("/user/:userId", (req , res) =>{
    const userId = req.params.userId;
    res.setHeader("Content-Type" , "Application/json");
    res.send({userId});
})
//busco por query localhost:8080/user?mane=Vicente
 app.get("/user", (req , res)=>{
    const name =req.query.name;
    res.setHeader("Content-Type","Application/json");
    res.send({name})
 }
 );
 app.put("/user/:userId", (req, res)=>{
const userId = req.params.userId;
const {name, email,password} = req.body;
res.send({id: userId, name, email, password: "****"});
 });

 app.delete("/user/:userId", (req, res)=>{
const userId = req.params.userId;
res.send(`Adios usuario ${userId}`);
 });