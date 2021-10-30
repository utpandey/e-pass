const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Validator = require('../middlewares/Validators');
// const ePassSchema = require('./EPass');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Password is required!'],
        validate: Validator.emailValidator
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: Validator.passwordValidator
    },
    role: {
        type: String,
        enum: ['employee', 'admin', 'hr', 'receptionist'],
        default: 'employee'
    },
    // role: { type: [{ type: String, enum: ['admin', 'hr', 'receptionist', 'employee'] }], default: ['employee'] },
    // epassIds: [ePassSchema]
    epassIds: [mongoose.Schema.Types.ObjectId]
})

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt, bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }
            if (!isMatch) {
                return reject(err);
            }
            resolve(true);
        })
    })
}

mongoose.model('User', userSchema);

module.exports = userSchema;