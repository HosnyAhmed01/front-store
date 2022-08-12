"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const database_config_1 = __importDefault(require("./config/database.config"));
const client = new pg_1.Pool({
    host: database_config_1.default.host,
    database: database_config_1.default.env === 'test' ? database_config_1.default.test : database_config_1.default.name,
    user: database_config_1.default.user,
    password: database_config_1.default.password,
    port: database_config_1.default.port
});
exports.default = client;
