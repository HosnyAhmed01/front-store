"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, ENV = _a.ENV, DB_NAME = _a.DB_NAME, DB_PORT = _a.DB_PORT, DB_HOST = _a.DB_HOST, DB_PASSWORD = _a.DB_PASSWORD, DB_USER = _a.DB_USER, DB_NAME_TEST = _a.DB_NAME_TEST;
exports["default"] = {
    env: ENV,
    port: Number(DB_PORT),
    name: DB_NAME,
    password: DB_PASSWORD,
    user: DB_USER,
    host: DB_HOST,
    test: String(DB_NAME_TEST)
};
