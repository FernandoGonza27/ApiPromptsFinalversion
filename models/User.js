//En cada uno de los model se importara un esquema de moongose con el fin de acomodar el objeto a a la base de datos de mongo db 
const mongoose = require('mongoose');

//el squema hace referencia al objeto y a los tipos de datos que se utilizaraan 

const UserSchema = new mongoose.Schema({
    username:{
        type: String, 
        require:true,
        unique:true
    },
    email:{
        type: String, 
        require:true,
        unique:true
    },
    password:{
        type: String, 
        require:true,
        unique:true
    },
    isVerify:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    auth:{
        type:Boolean,
        default:true,
    },
    }
,{timestamps: true})

module.exports=  mongoose.model("User", UserSchema);