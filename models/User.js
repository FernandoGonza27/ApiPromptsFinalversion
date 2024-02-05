const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _username: {
        type: String,
        required: true,
        unique: true
    },
    _email: {
        type: String,
        required: true,
        unique: true
    },
    _password: {
        type: String,
        required: true
    },
    _isVerify: {
        type: Boolean,
        default: false,
    },
    _isAdmin: {
        type: Boolean,
        default: false,
    },
    _auth: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });

// Métodos públicos para acceder a la información encapsulada
UserSchema.methods.getUsername = function () {
    return this._username;
};

UserSchema.methods.getEmail = function () {
    return this._email;
};

UserSchema.methods.getPassword = function () {
    return this._password;
};

UserSchema.methods.getIsVerify = function () {
    return this._isVerify;
};

UserSchema.methods.getIsAdmin = function () {
    return this._isAdmin;
};

UserSchema.methods.getAuth = function () {
    return this._auth;
};

module.exports = mongoose.model("User", UserSchema);
