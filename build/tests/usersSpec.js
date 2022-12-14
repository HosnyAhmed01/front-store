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
const users_model_1 = __importDefault(require("../models/users.model"));
const usermodel = new users_model_1.default;
describe("### users model ", () => {
    it("should be defiend ", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield usermodel.index();
        expect(data).toBeDefined;
    }));
    it("should be defiend", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield usermodel.create({ "first_name": "hosny", "last_name": "ahmed", "password": "123" });
        expect(data).toBeDefined;
    }));
    it("should show user by name ", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield usermodel.showByName("hosny");
        expect(data).toBeDefined();
    }));
    it("should show user by id ", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield usermodel.show({ id: 1 });
        expect(data).toBeDefined();
    }));
    it("should delete user", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield usermodel.delete(1);
        expect(data).toBeDefined();
    }));
});
