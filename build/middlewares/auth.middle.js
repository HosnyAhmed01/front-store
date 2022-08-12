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
exports.authGuard = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_config_1 = __importDefault(require("../config/auth.config"));
const users_model_1 = __importDefault(require("../models/users.model"));
const usersTable = new users_model_1.default;
/** @middleware protected route */
const authGuard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.headers.authorization;
        if (!token)
            throw new Error("Unauthorized");
        token = token.split(" ")[1];
        // verify token
        const payload = jsonwebtoken_1.default.verify(token, auth_config_1.default.jwtSecret);
        // check if user exists
        const user = yield usersTable.showByName(payload.sub);
        if (!user)
            throw new Error("Unauthorized");
        // attach user to request
        res.locals.user = user;
        next();
    }
    catch (error) {
        const { message } = error;
        res.status(401).json({ message });
    }
});
exports.authGuard = authGuard;
