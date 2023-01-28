/* eslint-disable indent */
import express, { Express } from 'express'

import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'

export const routes = (app: Express) => {
  app.use(express.json()),
    app.use('/categories', categoriesRoutes),
    app.use('/specifications', specificationsRoutes)
}
