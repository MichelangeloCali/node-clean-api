import { Router, Request, Response } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  const listAll = categoriesRepository.list()
  return res.json(listAll)
})
