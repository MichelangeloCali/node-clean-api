import express from 'express'
import { CourseAdd, CoursesList } from '../controllers/CoursesController'

export const coursesRouter = express.Router()

coursesRouter.get('/courses', CoursesList).post('/courses', CourseAdd)
// .get('/autores/:id')
// .post('/autores')
// .put('/autores/:id')
// .delete('/autores/:id')
