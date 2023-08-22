const jwt = require("jsonwebtoken");
const { createError } = require("./error.js");
const { nodemailer } = require("nodemailer");

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  if (!authorizationHeader) {
    return next(createError(401, "You are not authenticated!"));
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    req.user = user;
    next();
  });
};
const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};


const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user && req.user.isAdmin) {  // Verificar si req.user está definido
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};


module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin
};
