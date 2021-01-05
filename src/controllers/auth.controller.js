require('dotenv').config();
import UserSchema from '../models/UserSchema';
import * as jwt from 'jsonwebtoken';

const authCtr = {};

authCtr.welcome = (req, res) => {
    res.json({message: 'Welcome'});
};

authCtr.signup = async (req, res) => {
    const { username, email, password, userData } = req.body;
    const newUser = new UserSchema({
        username,
        email,
        password: await UserSchema.encryptPassword(password),
        userData
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({id: savedUser}, process.env.SECRET, {
        expiresIn: 86400
    });

    res.json({token});
}

export default authCtr;