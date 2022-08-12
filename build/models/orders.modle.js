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
class ordersModel {
    currentOrder(p) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect to databaes 
            const conn = yield database_1.default.connect();
            // write query 
            const sql = `SELECT * FROM orders WHERE user_id = $1`;
            // run query 
            const result = yield conn.query(sql, [p.user_id]);
            // release connection 
            conn.release();
            return result.rows;
        });
    }
    completedOrder(p) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect to databaes 
            const conn = yield database_1.default.connect();
            // write query 
            const sql = `SELECT * FROM orders WHERE user_id = $1 AND stauts='complete'`;
            // run query 
            const result = yield conn.query(sql, [p.user_id]);
            // release connection 
            conn.release();
            return result.rows;
        });
    }
}
;
exports.default = ordersModel;
