import { Router } from 'express'

import ProfessorController from './app/controllers/ProfessorController'
import corsMiddleware from './app/middlewares/cors'

const routes = new Router()

routes.use(corsMiddleware)
routes.get('/professors', ProfessorController.index)

export default routes
