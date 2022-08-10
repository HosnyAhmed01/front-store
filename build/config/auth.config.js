"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, ROUND = _a.ROUND, PAPER = _a.PAPER, SECRET = _a.SECRET;
exports["default"] = { round: Number(ROUND), paper: PAPER, jwtSecret: SECRET };
