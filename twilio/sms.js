const express = require("express");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,  process.env.TWILIO_AUTH_TOKEN);


const SendMesagge = () =>{

//Crer un metodo que inicialice un codigo y lo vincule a un usuario
const codesms =5450;
client.messages
  .create({
     body: `Este es tu codigo de verificacion ${codesms}?`,
     from: '+50662002183',
     to: '+12058946116'
   })
  .then(message => console.log(message.sid))
  .catch(err => next(err));

}

const verifyEmail = ()  =>{
  

}