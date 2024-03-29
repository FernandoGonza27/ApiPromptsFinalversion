const User = require("../models/User.js");

const createUser = async (req, res, next) => {
    //se crea el nuevo objeto con el modelo previamete creado 
    const newUser = new User(req.body);
    try {

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        next(err);
    }
}


const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        next(err)
    }

}
const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(
            req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        next(err)
    }

}
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }

}
const getUsers = async (req, res, next) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err)
    }

}

module.exports={
    getUser,
    getUsers,
    deleteUser,
    createUser,
    updateUser
}
