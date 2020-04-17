const persona = require('../models/modelPerson');
const {Router} = require('express');

const router =Router();

router.post('/crearPersona',(req,res)=>{
        
    const  {dni,names,email,phone,direccion,genero}=  req.body

    persona.insertMany({dni,names,email,phone,direccion,genero},
        (err,resp)=>{
        if(err){
            throw err;

        }else{
            res.status(200).json(resp);
        }
    });
}).post('/editarPersona',(req,res)=>{
    const {dni,names,email,phone,direccion,genero}=  req.body
    persona.updateOne({_id:_id},{$set:{
        dni,names,email,phone,direccion,genero
    }}),(err,resp)=>{
        if(err){
            throw err;

        }else{
            res.status(200).json(resp);
        }
    }
}).post('/eliminarPersona',(req,res)=>{

    const { _id } =req.body

    persona.remove({_id:_id},(req,res)=>{
        if(err){
            throw err;

        }else{
            res.status(200).json(resp);
        }

    })
}).get('/todos',(req,res)=> {
    persona.find({},(err,resp)=>{
        if(err){
            throw err;

        }else{
            res.status(200).json(resp);
        }
    })
})

module.exports=router