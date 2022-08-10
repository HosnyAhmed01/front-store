"use strict";
exports.__esModule = true;
var express_1 = require("express");
var orders_controller_1 = require("../controllers/orders.controller");
var auth_middle_1 = require("../middlewares/auth.middle");
var ordersRouter = (0, express_1.Router)();
ordersRouter.get('/current', auth_middle_1.authGuard, orders_controller_1.currentOrderController);
ordersRouter.get('/complete', auth_middle_1.authGuard, orders_controller_1.completedOrderController);
exports["default"] = ordersRouter;
