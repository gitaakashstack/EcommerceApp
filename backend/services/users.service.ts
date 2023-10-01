import { v4 } from "uuid";
import * as jwt from 'jsonwebtoken';
import { UserRepository } from "../repositories/user.repository";
import { IUser, User } from "../schemas/user.schema";

export class UserService {

    constructor(private userRepository: UserRepository) { }

    async createNewUser(userData: IUser) {
        await this.userRepository.create(userData);
    }

    async getUser(email: string) {
        return (await this.userRepository.findByEmail(email))?.toObject();
    }

    generateTokens(email: string) {
        const expiresIn = 30 * 60 * 1000;
        const access_token = jwt.sign({ email }, <string>process.env.JWTSECRET, {
            expiresIn
        });
        const refresh_token = v4();

        return {
            access_token, refresh_token, expiresIn
        }
    }
}