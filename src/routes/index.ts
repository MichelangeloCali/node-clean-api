import express, { Express } from 'express'
import { categoriesRoutes } from './categoriesRoutes'

export const routes = (app: Express) => {
  app.use(express.json(), categoriesRoutes)
}
