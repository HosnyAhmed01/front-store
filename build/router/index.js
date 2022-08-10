"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var auth_router_1 = __importDefault(require("../router/auth.router"));
var products_router_1 = __importDefault(require("./products.router"));
var orders_router_1 = __importDefault(require("./orders.router"));
var router = (0, express_1.Router)();
router.use('/auth', auth_router_1["default"]);
router.use('/products', products_router_1["default"]);
router.use('/orders', orders_router_1["default"]);
exports["default"] = router;
