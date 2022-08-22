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
    createOrder(status = 'open', user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO orders (status , user_id) VALUES ($1 , $2) RETURNING *`;
                const result = yield conn.query(sql, [status, user_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Couldn't create order please try again`);
            }
        });
    }
    updateOrder(stauts, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE orders SET status=$1 WHERE id=$2 RETURNING *`;
                const result = yield conn.query(sql, [stauts, id]);
                conn.release();
                return result.rows[0];
            }
            catch (_a) {
                throw new Error(`could't update order`);
            }
        });
    }
    removeOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM order_products WHERE order_id =$1 RETURNING *`;
                const sql2 = `DELETE FROM orders WHERE id=$1`;
                const result = yield conn.query(sql, [id]);
                const result2 = yield conn.query(sql2, [id]);
                return result.rows[0];
            }
            catch (_a) {
                throw new Error(`could't remove order`);
            }
        });
    }
    currentOrder(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect to databaes 
            const conn = yield database_1.default.connect();
            // write query 
            const sql = `SELECT * FROM orders WHERE user_id = $1`;
            // run query 
            const result = yield conn.query(sql, [user_id]);
            // release connection 
            conn.release();
            return result.rows;
        });
    }
    completedOrder(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            // connect to databaes 
            const conn = yield database_1.default.connect();
            // write query 
            const sql = `SELECT * FROM orders WHERE user_id = $1 AND status='complete'`;
            // run query 
            const result = yield conn.query(sql, [user_id]);
            // release connection 
            conn.release();
            return result.rows;
        });
    }
    addProduct(quantity, order_id, product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO order_products (quantity , order_id , product_id) VALUES ($1 , $2 , $3) RETURNING *`;
                const result = yield conn.query(sql, [quantity, order_id, product_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`can not add product to your order`);
            }
        });
    }
}
;
exports.default = ordersModel;
