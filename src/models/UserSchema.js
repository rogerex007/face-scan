import {Schema, model} from 'mongoose';
import * as bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    userData: {
        photo: {type: String},
        names: {type: String},
        lastNames: {type: String},
        birthDate: {type: Date},
        location: {type: String},
        celPhone: {type: String, unique: true}
    },
    password: {type: String, required: true},
}, {versionKey: false, timestamps: true});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return bcrypt.compare(password, receivedPassword);
};

export default model('user', userSchema);