"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = __importDefault(require("express"));
const CoursesController_1 = require("../controllers/CoursesController");
exports.coursesRouter = express_1.default.Router();
exports.coursesRouter.get('/courses', CoursesController_1.CoursesList).post('/courses', CoursesController_1.CourseAdd);
// .get('/autores/:id')
// .post('/autores')
// .put('/autores/:id')
// .delete('/autores/:id')
//# sourceMappingURL=coursesRoutes.js.map