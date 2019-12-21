import { Router } from 'express'

import TeacherController from './app/controllers/TeacherController'
import corsMiddleware from './app/middlewares/cors'

const routes = new Router()

routes.use(corsMiddleware)
routes.get('/teachers', TeacherController.index)

export default routes
