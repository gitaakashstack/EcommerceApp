import * as jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import { responseMWType } from "../types/expressMiddleware";
import { IUser, User } from '../schemas/user.schema';
import { UserService } from '../services/users.service';
import { UserRepository } from '../repositories/user.repository';

let userData = {
    name: 'Aakash',
    email: 'dummy@gmail.com',
    password: 'hashed',
    gender: 'male',
    location: 'mumbai'
};

let DUMMY_USERS = [
    {
        name: 'Aakash',
        gender: 'male',
        location: 'mumbai',
        email: 'sample1@gmail.com',
        password: 'password'
    },
    {
        name: 'Aakash',
        gender: 'male',
        location: 'mumbai',
        email: 'sample2@gmail.com',
        password: 'password'
    }
]

const userService = new UserService(new UserRepository());

export const registerHandler: responseMWType = async function (req, res, next) {
    // userData=req.body;
    const userData: IUser = req.body;
    //TODO Apply all the validators on request body and then save it in users collection

    await userService.createNewUser(userData);

    return res.status(201).json({
        message: 'user created',
    });
}

export const loginHandler: responseMWType = async function (req, res, next) {
    const { email, password } = req.body;

    const userExist = await userService.getUser(email);

    // const userExist = DUMMY_USERS.find(user => user.email === email);

    if (!userExist || userExist.password !== password)
        return res.status(401).json({
            message: 'Invalid Email or Password'
        });
    //TODO If email exists in the users database. Checking should be done in express validator

    const { access_token, refresh_token, expiresIn } = userService.generateTokens(userExist.email);

    return res.status(200).json({
        access_token,
        refresh_token,
        expires_in: expiresIn
    })
}

export const getUserInfoHandler: responseMWType = async (req, res, next) => {
    const userEmail = req.email;
    const userExist = await userService.getUser(userEmail);

    if (!userExist)
        return res.status(404).json({
            message: 'User Not Found'
        });

    return res.status(200).json({
        id: userExist._id.toString(),
        name: userExist.name,
        email: userExist.email,
        mobile: userExist.mobile,
        gender: userExist.gender
    })
}
