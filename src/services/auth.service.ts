import bcrypt from 'bcrypt';
import Usersmodel from '../models/users.model';
import users from '../interfaces/users.interface';
import authConfig from '../config/auth.config';
import jwt from 'jsonwebtoken';
import { TokenPayload , AuthData , UserCredenctials } from '../interfaces/auth.interface';

const usersTable = new Usersmodel; 


export const registerService = async (user: users): Promise<users> => {
    try {
        const hashedPassword = bcrypt.hashSync(
            user.password + authConfig.paper,
            authConfig.round
        )
        user.password = hashedPassword;
        const data = await usersTable.create(user);
        return data;
    } catch (error) {
        throw new Error(error as string)
    }
}

export const loginService = async (credentials: UserCredenctials): Promise<AuthData> => {
    try {
        const user = await usersTable.show(credentials);
        if (!user) throw new Error("User not found")

        // compare password hash
        const isPasswordMatch = await bcrypt.compare(credentials.password + authConfig.paper, user.password as string);
        if (!isPasswordMatch) throw new Error("Invalid email or password");

        // generate token
        const token = generateToken(user);

        const authData: AuthData = {
            user: {
                id: String(user.id),
                first_name: user.first_name
            },
            token
        }

        return authData;
    } catch (error) {
        throw new Error(error as string)
    }
}

const generateToken = (user: users): string => {
    try {
        const payload: TokenPayload = { sub: user.first_name , id: Number(user.id)};
        return jwt.sign(payload, authConfig.jwtSecret, { expiresIn: '10d', issuer: 'dailynews' });
    } catch (error) {
        throw new Error(error as string)
    }
}