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
        const user = yield request
            .post('/auth/register')
            .send({ first_name: "hosny", last_name: "sawaby", password: "pass1234" });
        const res = yield request.get('/auth/login')
            .send({ id: 1, password: "pass1234" });
        token = res.body.data.token;
    }));
    it("create order return status of 200 user auth", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/orders/create')
            .set('Authorization', 'Bearer ' + token)
            .send({ status: "complete", id: 1 });
        expect(response.status).toBe(200);
    }));
    it("create order return status of 401 user  not auth", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/orders/create')
            .send({ status: "open", id: 1 });
        expect(response.status).toBe(401);
    }));
    it("current orders should return status of 401", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/orders/current/1')
            .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
    }));
    it("completed orders should return status of 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/orders/complete/1')
            .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
    }));
    it("update order should return status of 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.put('/orders/update')
            .set('Authorization', 'Bearer ' + token)
            .send({ id: 1, status: "open" });
        expect(response.status).toBe(200);
    }));
    it("remove orders should return status of 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.delete('/orders/remove')
            .set('Authorization', 'Bearer ' + token)
            .send({ id: 1 });
        expect(response.status).toBe(200);
    }));
});
