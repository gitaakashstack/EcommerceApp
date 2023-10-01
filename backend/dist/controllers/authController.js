"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfoHandler = exports.loginHandler = exports.registerHandler = void 0;
const users_service_1 = require("../services/users.service");
const user_repository_1 = require("../repositories/user.repository");
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
];
const userService = new users_service_1.UserService(new user_repository_1.UserRepository());
const registerHandler = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // userData=req.body;
        const userData = req.body;
        //TODO Apply all the validators on request body and then save it in users collection
        yield userService.createNewUser(userData);
        return res.status(201).json({
            message: 'user created',
        });
    });
};
exports.registerHandler = registerHandler;
const loginHandler = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const userExist = yield userService.getUser(email);
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
        });
    });
};
exports.loginHandler = loginHandler;
const getUserInfoHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.email;
    const userExist = yield userService.getUser(userEmail);
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
    });
});
exports.getUserInfoHandler = getUserInfoHandler;
