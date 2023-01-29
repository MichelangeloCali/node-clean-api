import { Router, Request, Response } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

export const specificationsRoutes = Router()

specificationsRoutes.post('/', (req: Request, res: Response) => {
  return createSpecificationController.handle(req, res)
})
