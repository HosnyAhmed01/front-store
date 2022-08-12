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
const database_1 = __importDefault(require("../database"));
class Usersmodel {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `SELECT * FROM users`;
            // run query
            const result = yield conn.query(sql);
            // release connection 
            conn.release();
            return result.rows;
        });
    }
    show(U) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `SELECT * FROM users WHERE id = $1`;
            // run query
            const result = yield conn.query(sql, [U.id]);
            // release connection 
            conn.release();
            return result.rows[0];
        });
    }
    showByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `SELECT * FROM users WHERE first_name = $1`;
            // run query
            const result = yield conn.query(sql, [name]);
            // release connection 
            conn.release();
            return result.rows[0];
        });
    }
    create(U) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `INSERT INTO users (first_name , last_name , password) VALUES ($1 , $2 , $3) RETURNING *`;
            // run query
            const result = yield conn.query(sql, [U.first_name, U.last_name, U.password]);
            // release connection 
            conn.release();
            return result.rows[0];
        });
    }
}
exports.default = Usersmodel;
