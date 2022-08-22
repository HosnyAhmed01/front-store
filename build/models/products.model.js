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
class ProductsModel {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `SELECT * FROM products`;
            // run query
            const result = yield conn.query(sql);
            // release connection 
            conn.release();
            return result.rows;
        });
    }
    show(p) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `SELECT * FROM products WHERE name = $1`;
            // run query
            const result = yield conn.query(sql, [p.name]);
            // release connection 
            conn.release();
            return result.rows[0];
        });
    }
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect  to database
            const conn = yield database_1.default.connect();
            // write sql query 
            const sql = `INSERT INTO products (name , price , category) VALUES ($1 , $2 , $3) RETURNING *`;
            // run query
            const result = yield conn.query(sql, [p.name, p.price, p.category]);
            // release connection 
            conn.release();
            return result.rows[0];
        });
    }
}
;
exports.default = ProductsModel;
