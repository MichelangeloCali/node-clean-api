"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseAdd = exports.CoursesList = void 0;
const CoursesList = (req, res) => {
    return res.status(200).json({ message: 'Cursos de Node JS' });
};
exports.CoursesList = CoursesList;
const CourseAdd = (req, res) => {
    const { name } = req.body;
    return res.status(201).json({ name });
};
exports.CourseAdd = CourseAdd;
//# sourceMappingURL=CoursesController.js.map