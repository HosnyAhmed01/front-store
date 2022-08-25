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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
let token = null;
const request = (0, supertest_1.default)(server_1.default);
describe("should test the endpoint of orders", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/auth/login')
            .send({ id: 1, password: "pass1234" });
        token = res.body.data.token;
    }));
    it("create product should return status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/products/create')
            .set('Authorization', 'Bearer ' + token)
            .send({ "name": "car", "price": 2000, "category": "cars" });
        expect(response.status).toBe(200);
    }));
    it("create product should return status 401", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/products/create')
            .send({ "name": "car", "price": 2000, "category": "cars" });
        expect(response.status).toBe(401);
    }));
    it("show product should return status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products/index')
            .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
    }));
    it("show product should return status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products/show')
            .set('Authorization', 'Bearer ' + token)
            .send({ name: "car" });
        expect(response.status).toBe(200);
    }));
    it("should add porduct to an order", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/orders/create')
            .set('Authorization', 'Bearer ' + token)
            .send({ status: "complete", user_id: 1 });
        const res = yield request.post('/orders/order/3/products')
            .set('Authorization', 'Bearer ' + token)
            .send({ quantity: 10, product_id: 1 });
        expect(res.status).toBe(200);
    }));
});
