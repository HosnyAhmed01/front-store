"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = __importDefault(require("./router/index"));
var app = (0, express_1["default"])();
var address = 3000;
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(express_1["default"].json());
app.use('/', index_1["default"]);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
