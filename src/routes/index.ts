/* eslint-disable indent */
import express, { Express } from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../config/swagger.json'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'

export const routes = (app: Express) => {
  app.use(express.json()),
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)),
    app.use('/categories', categoriesRoutes),
    app.use('/specifications', specificationsRoutes)
}
