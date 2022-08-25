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
const orders_modle_1 = __importDefault(require("../models/orders.modle"));
const users_model_1 = __importDefault(require("../models/users.model"));
const products_model_1 = __importDefault(require("../models/products.model"));
const orderModel = new orders_modle_1.default;
const usermodel = new users_model_1.default;
const productmodel = new products_model_1.default;
describe("### orders model ", () => {
    it("should be defiend ", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield usermodel.create({ "first_name": "hosny", "last_name": "ahmed", "password": "123" });
        const data = yield orderModel.createOrder('complete', user.id);
        expect(data).toBeDefined();
    }));
    it("should get current orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderModel.currentOrder(1);
        expect(data).toBeDefined();
    }));
    it("should get completed orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderModel.completedOrder(1);
        expect(data).toBeDefined();
    }));
    it("should update order", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderModel.updateOrder('open', 2);
        expect(data).toBeDefined();
    }));
    it("should add product to an order", () => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productmodel.create({ name: "car", price: 2000, category: "cars" });
        const addProduct = yield orderModel.addProduct(20, 2, product.id);
        expect(addProduct).toBeDefined();
    }));
    it("should remove order", () => __awaiter(void 0, void 0, void 0, function* () {
        const delteOrder = yield orderModel.removeOrder(2);
        expect(delteOrder).toBeDefined();
    }));
});
