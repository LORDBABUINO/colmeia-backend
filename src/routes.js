import { Router } from 'express'

import ProfessorController from './app/controllers/ProfessorController'

const routes = new Router()

routes.get('/professors', ProfessorController.index)

export default routes
