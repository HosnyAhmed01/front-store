"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = require("pg");
var database_config_1 = __importDefault(require("./config/database.config"));
var client = new pg_1.Pool({
    host: database_config_1["default"].host,
    database: database_config_1["default"].name,
    user: database_config_1["default"].user,
    password: database_config_1["default"].password,
    port: database_config_1["default"].port
});
exports["default"] = client;
