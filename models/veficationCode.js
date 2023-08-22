//En cada uno de los model se importara un esquema de moongose con el fin de acomodar el objeto a a la base de datos de mongo db 
const mongoose = require('mongoose');

//el squema hace referencia al objeto y a los tipos de datos que se utilizaraan 

const CodeSchema = new mongoose.Schema({
    code:{
        type: String, 
        require:true,
        unique:true},
    userEmail:{
        type: String, 
        require:true,
    },
    
    }
,{timestamps: true})

module.exports = mongoose.model("Code", CodeSchema);