import express, { Request, Response, Express } from 'express'
import { coursesRouter } from './coursesRoutes'

export const routes = (app: Express) => {
  app.route('/').get((_request: Request, response: Response) => {
    response.status(200).send({
      titulo: 'Bem-vindo ao nosso curso de programação',
    })
  })

  app.use(express.json(), coursesRouter)
}
