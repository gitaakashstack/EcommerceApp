import { IUser, User } from "../schemas/user.schema";

export class UserRepository {

    private readonly User = User;

    async create(userData: IUser) {
        await this.User.create([userData]);
    }

    async findByEmail(email: string) {
        return await this.User.findOne({ email });
    }
}