import express, { Express } from 'express'
import { categoriesRoutes } from './categories.routes'

export const routes = (app: Express) => {
  app.use(express.json(), categoriesRoutes)
}
