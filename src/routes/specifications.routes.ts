import { Router, Request, Response } from 'express'

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

export const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  )

  createSpecificationService.execute({ name, description })

  return res.status(201).send()
})
