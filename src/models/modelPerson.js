const {Schema,model}=require('mongoose');

const personaSchema = new Schema({

    dni:{type:String},
    names:{type:String},
    email:{type:String},
    phone:{type:String},
    direccion:{type:String},
    genero:{type:String}
})

const persona =  model('personas', personaSchema)