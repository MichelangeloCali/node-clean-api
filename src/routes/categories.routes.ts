import { Router, Request, Response } from 'express'
import { CreateCategoryService } from '../services/CreateCategoryService'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  const listAll = categoriesRepository.list()
  return res.json(listAll)
})
