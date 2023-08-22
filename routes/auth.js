
const express = require('express');

const{register,login,updateVerificationStatus}=require("../controllers/auth.js");


// de esta manera se crean las rutas que se necesitaran para el aplicativo
const router = express.Router();


router.post("/register",register)
router.post("/login",login)
router.get("/send-verification");
router.put('/verify/:id',updateVerificationStatus);
module.exports= router;