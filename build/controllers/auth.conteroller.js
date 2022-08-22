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
exports.showAll = exports.loginController = exports.registerController = void 0;
const auth_service_1 = require("../services/auth.service");
const auth_service_2 = require("../services/auth.service");
const users_model_1 = __importDefault(require("../models/users.model"));
const usersTable = new users_model_1.default;
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { first_name, last_name, password } = req.body;
        const data = yield (0, auth_service_1.registerService)({ first_name, last_name, password });
        res.json({
            messege: "user create",
            data: data
        });
    }
    catch (err) {
        throw new Error(`can not create user`);
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, auth_service_2.loginService)(req.body);
        res.json({
            messege: "loged in",
            data: data
        });
    }
    catch (err) {
        throw new Error(`can not login please try again `);
    }
});
exports.loginController = loginController;
const showAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield usersTable.index();
        res.json({
            messege: 'hello',
            data: data
        });
    }
    catch (err) {
        throw new Error(`can not show this info`);
    }
});
exports.showAll = showAll;
