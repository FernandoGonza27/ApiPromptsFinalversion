
const express = require("express");
//const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const SendMessage = (phoneNumber) => {
  // Generar un código de verificación aleatorio
  const verificationCode = Math.floor(1000 + Math.random() * 9000);

  // Enviar el mensaje con el código de verificación
  client.messages
    .create({
      body: `Tu código de verificación: ${verificationCode}`,
      from: '+50662002183', // Tu número de Twilio
      to: phoneNumber // El número de teléfono del usuario
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error(err));
};

module.exports = {
  SendMessage
};
