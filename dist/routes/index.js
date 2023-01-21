"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const coursesRoutes_1 = require("./coursesRoutes");
const routes = (app) => {
    app.route('/').get((_request, response) => {
        response
            .status(200)
            .send({ titulo: 'Bem-vindo ao nosso curso de programação' });
    });
    app.use(express_1.default.json(), coursesRoutes_1.coursesRouter);
};
exports.routes = routes;
//# sourceMappingURL=index.js.map