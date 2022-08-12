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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.registerService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_model_1 = __importDefault(require("../models/users.model"));
const auth_config_1 = __importDefault(require("../config/auth.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usersTable = new users_model_1.default;
const registerService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = bcrypt_1.default.hashSync(user.password + auth_config_1.default.paper, auth_config_1.default.round);
        user.password = hashedPassword;
        const data = yield usersTable.create(user);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.registerService = registerService;
const loginService = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usersTable.show(credentials);
        if (!user)
            throw new Error("User not found");
        // compare password hash
        const isPasswordMatch = yield bcrypt_1.default.compare(credentials.password + auth_config_1.default.paper, user.password);
        if (!isPasswordMatch)
            throw new Error("Invalid email or password");
        // generate token
        const token = generateToken(user);
        const authData = {
            user: {
                id: String(user.id),
                first_name: user.first_name
            },
            token
        };
        return authData;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.loginService = loginService;
const generateToken = (user) => {
    try {
        const payload = { sub: user.first_name, id: Number(user.id) };
        return jsonwebtoken_1.default.sign(payload, auth_config_1.default.jwtSecret, { expiresIn: '10d', issuer: 'dailynews' });
    }
    catch (error) {
        throw new Error(error);
    }
};
