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
exports.createController = exports.showController = exports.indexController = void 0;
const products_model_1 = __importDefault(require("../models/products.model"));
const productsModel = new products_model_1.default;
const indexController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productsModel.index();
        res.json({
            data: data
        });
    }
    catch (err) {
        throw new Error(`sorry can not show products  ${err}`);
    }
});
exports.indexController = indexController;
const showController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productsModel.show(req.body);
        res.json({
            product: data
        });
    }
    catch (err) {
        throw new Error(`can not show product  ${err}`);
    }
});
exports.showController = showController;
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productsModel.create(req.body);
        res.json({
            messege: `product created`,
            data: data
        });
    }
    catch (err) {
        throw new Error(`can not ctreat ${err}`);
    }
});
exports.createController = createController;
