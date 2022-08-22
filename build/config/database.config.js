"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { ENV, DB_NAME, DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, DB_NAME_TEST } = process.env;
exports.default = {
    env: ENV,
    port: Number(DB_PORT),
    name: DB_NAME,
    password: DB_PASSWORD,
    user: DB_USER,
    host: DB_HOST,
    test: String(DB_NAME_TEST)
};
