const express = require('express');
const {
    updateTag,
    getTag,
    deleteTag,    
    createTag    
} = require("../controllers/tag.js");

const { verifyUser } = require("../utils/verifyToken.js");
const router = express.Router();


// Llamando a la función CREATE del controlador
router.post("/",verifyUser,createTag);

// Llamando a la función UPDATE del controlador
router.put("/:id", verifyUser, updateTag);

// Llamando a la función DELETE del controlador
router.delete("/:id", verifyUser, deleteTag);

// Llamando a la función GET del controlador
router.get("/", getTag);

// Llamando a otras funciones del controlador (si las tienes)

module.exports = router;
