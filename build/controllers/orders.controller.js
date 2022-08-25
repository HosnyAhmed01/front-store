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
exports.addProductController = exports.completedOrderController = exports.currentOrderController = exports.removeOrderController = exports.updateOrderController = exports.createOrderController = void 0;
const orders_modle_1 = __importDefault(require("../models/orders.modle"));
const ordersModel = new orders_modle_1.default;
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderStatus = req.body.status;
        const user_id = req.body.user_id;
        const data = yield ordersModel.createOrder(orderStatus, user_id);
        res.json({
            data: data
        });
    }
    catch (err) {
        throw new Error(`sorry can not created order`);
    }
});
exports.createOrderController = createOrderController;
const updateOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderStatus = req.body.status;
        const id = req.body.id;
        const data = yield ordersModel.updateOrder(orderStatus, id);
        res.json({
            data: data
        });
    }
    catch (err) {
        throw new Error(`sorry can not update order`);
    }
});
exports.updateOrderController = updateOrderController;
const removeOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const data = yield ordersModel.removeOrder(id);
        res.json({
            data: data
        });
    }
    catch (err) {
        throw new Error(`sorry can not created order`);
    }
});
exports.removeOrderController = removeOrderController;
const currentOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        const data = yield ordersModel.currentOrder(Number(user_id));
        res.json({
            data: data
        });
    }
    catch (err) {
        throw new Error(`sorry can not get current order`);
    }
});
exports.currentOrderController = currentOrderController;
const completedOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        const data = yield ordersModel.completedOrder(Number(user_id));
        res.json({
            data: data
        });
    }
    catch (err) {
        throw new Error(`sorry can not get current order`);
    }
});
exports.completedOrderController = completedOrderController;
const addProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quantity = req.body.quantity;
        const { id } = req.params;
        const product_id = req.body.product_id;
        const OrderedProducts = yield ordersModel.addProduct(Number(quantity), Number(id), Number(product_id));
        res.json({
            messege: 'succes',
            data: OrderedProducts
        });
    }
    catch (err) {
        throw new Error('can not add porduct');
    }
});
exports.addProductController = addProductController;
