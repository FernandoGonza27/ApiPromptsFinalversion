const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error.js");
const jwt = require("jsonwebtoken");

 const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            isVerify:false
        })

        await newUser.save();
        res.status(200).send("User has been created")
    } catch (err) {
        next(err)
    }
}


const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!user.isVerify) return next(createError(403, "Unverified user"));
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"));


        //jwt pa    ra user token y indetificar admin para enviarlo mediante las cookies
        //falta guardar la sesion y 
        const token = jwt.sign(
            { id: user.id, isAdmin: user.isAdmin },
            process.env.JWT
        );
        const { password, ...otherDetails } = user._doc;
        res                                   
            .status(200)
            .json({
                token, // Agrega el token al objeto de respuesta
                ...otherDetails // Agrega los otros detalles del usuario
            });
    } catch (err) {
        next(err)
    }
}
module.exports={
    login,
    register
}