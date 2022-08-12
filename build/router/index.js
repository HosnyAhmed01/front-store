"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = __importDefault(require("../router/auth.router"));
const products_router_1 = __importDefault(require("./products.router"));
const orders_router_1 = __importDefault(require("./orders.router"));
const router = (0, express_1.Router)();
router.use('/auth', auth_router_1.default);
router.use('/products', products_router_1.default);
router.use('/orders', orders_router_1.default);
exports.default = router;
