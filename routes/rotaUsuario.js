const express = require("express");
const router = express.Router();




const usuarios=[
   
    {
        id:1,
        nome:"Derick",
        email:"derick@gmail.com",
        senha:"123"

    },
    
    {
        id:2,
        nome:"Iudhy",
        email:"iudhy@gmail.com",
        senha:"123"

    },

    {
        id:3,
        nome:"Willian",
        email:"william@gmail.com",
        senha:"123"

    },

    {
        id:4,
        nome:"Bispo",
        email:"bispo@gmail.com",
        senha:"123"

    },

    {

        id:5,
        nome:"Antonio",
        email:"antonio@gmail.com",
        senha:"123"

    },

    {
        id:6,
        nome:"Raimundo",
        email:"raimundo@gmail.com",
        senha:"123"

    },

    {

        id:7,
        nome:"Wallysson",
        email:"wallysson@gmail.com",
        senha:"123"

    },

    { 
        id:8,
        nome:"Wesley",
        email:"wesley@gmail.com",
        senha:"123"

    },

    {
        id:9,
        nome:"Gui",
        email:"gui@gmail.com",
        senha:"123"

    },
    
]
 router.get("/",(req,res)=>{
    
  res.send(usuarios);
 })
 router.post("/",(req,res)=>{
 const nome=req.body.nome;
 res.status(200).send({dados:nome})
 });

module.exports = router;