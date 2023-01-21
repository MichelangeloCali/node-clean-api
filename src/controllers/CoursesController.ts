import { Request, Response } from 'express'

export const CoursesList = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Cursos de Node JS' })
}

export const CourseAdd = (req: Request, res: Response) => {
  const { name } = req.body
  return res.status(201).json({ name })
}
