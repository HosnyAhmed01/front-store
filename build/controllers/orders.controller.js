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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addProductController = exports.completedOrderController = exports.currentOrderController = exports.removeOrderController = exports.updateOrderController = exports.createOrderController = void 0;
var orders_modle_1 = __importDefault(require("../models/orders.modle"));
var ordersModel = new orders_modle_1["default"];
var createOrderController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderStatus, user_id, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderStatus = req.body.status;
                user_id = req.body.user_id;
                return [4 /*yield*/, ordersModel.createOrder(orderStatus, user_id)];
            case 1:
                data = _a.sent();
                res.json({
                    createdOrder: data
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                throw new Error("sorry can not created order");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createOrderController = createOrderController;
var updateOrderController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderStatus, id, data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderStatus = req.body.status;
                id = req.body.id;
                return [4 /*yield*/, ordersModel.updateOrder(orderStatus, id)];
            case 1:
                data = _a.sent();
                res.json({
                    updatedOrder: data
                });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                throw new Error("sorry can not update order");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateOrderController = updateOrderController;
var removeOrderController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.body.id;
                return [4 /*yield*/, ordersModel.removeOrder(id)];
            case 1:
                data = _a.sent();
                res.json({
                    createdOrder: data
                });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                throw new Error("sorry can not created order");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.removeOrderController = removeOrderController;
var currentOrderController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ordersModel.currentOrder({ user_id: Number(req.query.user_id) })];
            case 1:
                data = _a.sent();
                res.json({
                    currentOrders: data
                });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                throw new Error("sorry can not get current order");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.currentOrderController = currentOrderController;
var completedOrderController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ordersModel.completedOrder({ user_id: Number(req.query.user_id) })];
            case 1:
                data = _a.sent();
                res.json({
                    completedorders: data
                });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                throw new Error("sorry can not get current order");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.completedOrderController = completedOrderController;
var addProductController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quantity, id, product_id, OrderedProducts, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                quantity = req.body.quantity;
                id = req.params.id;
                product_id = req.body.product_id;
                return [4 /*yield*/, ordersModel.addProduct(Number(quantity), Number(id), Number(product_id))];
            case 1:
                OrderedProducts = _a.sent();
                res.json({
                    messege: 'succes',
                    data: OrderedProducts
                });
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                throw new Error('can not add porduct');
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProductController = addProductController;
