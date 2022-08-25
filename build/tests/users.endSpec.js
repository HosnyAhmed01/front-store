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
describe("should test the endpoint of users", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/auth/login')
            .send({ id: 1, password: "pass1234" });
        token = res.body.data.token;
    }));
    it("should test the register endpoint ", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.post('/auth/register').
            send({ first_name: "mohamed", last_name: "sawaby", password: "pass1234" });
        expect(res.status).toBe(200);
    }));
    it("should test the login endpoint ", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/auth/login').
            send({ id: 3, password: "pass1234" });
        expect(res.status).toBe(200);
    }));
    it("should test the index endpoint ", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/auth/index')
            .set('Authorization', 'Bearer ' + token);
        expect(res.status).toBe(200);
    }));
});
