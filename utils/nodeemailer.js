//const Code = require('../models/veficationCode.js')
const nodemailer = require('nodemailer');

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'fg760173@gmail.com', // Cambia esto a tu dirección de correo
        pass: 'qxrszqgplmemzgea' // Cambia esto a tu contraseña de correo
    }
});

const SendVerificationCodeEmail = async (email,userId) => {
    // Generar un código de verificación aleatorio
    //const verificationCode = Math.floor(1000 + Math.random() * 9000);
    const verificationPath = `http://localhost:3000/verify/${userId}`;
    //const newCode = new Code({
    //    code: verificationCode,
        //userEmail: email
    //})
    //await newCode.save();
    // Configurar el contenido del correo
    const mailOptions = {
        from: 'fg760173@gmail.com', // Cambia esto a tu dirección de correo
        to: email,
        subject: 'Ruta de Verificación',
        text: `Tu tu ruta de verificación es: ${verificationPath}`
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = {
    SendVerificationCodeEmail
};

