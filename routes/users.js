
const express = require('express');
const {
    updateUser,
    getUser,
    deleteUser,
    getUsers,
    createUser   
} = require("../controllers/user.js");

const { verifyAdmin,verifyUser } = require("../utils/verifyToken.js");
const router = express.Router();
// IT IS CALLED THE FUNCTION CREATE OF CONTROLLER
router.post("/",verifyAdmin,createUser)
// IT IS CALLED THE FUNCTION UPDATE OF CONTROLLER
router.put("/:id",verifyUser, updateUser)
// IT IS CALLED THE FUNCTION DELETE OF CONTROLLER
router.delete("/:id",verifyAdmin, deleteUser)
// IT IS CALLED THE FUNCTION GET OF CONTROLLER
router.get("/:id",verifyAdmin, getUser)
// IT IS CALLED THE FUNCTION GET ALL OF CONTROLLER
router.get("/",verifyAdmin,getUsers)


// Llamando a otras funciones del controlador (si las tienes)

module.exports = router;
