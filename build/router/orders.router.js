"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controller_1 = require("../controllers/orders.controller");
const auth_middle_1 = require("../middlewares/auth.middle");
const ordersRouter = (0, express_1.Router)();
ordersRouter.get('/current', auth_middle_1.authGuard, orders_controller_1.currentOrderController);
ordersRouter.get('/complete', auth_middle_1.authGuard, orders_controller_1.completedOrderController);
exports.default = ordersRouter;
