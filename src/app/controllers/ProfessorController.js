import Parse from 'parse/node'

import Professor from '../models/Professor'

class ProfessorController {
  async index(req, res) {
    const { name } = req.query
    const Professores = Parse.Object.extend('Professores')
    const query = new Parse.Query(Professores)
    if (name) query.matches('nome', new RegExp(`^${name}`, 'i'))
    const results = await query.find()
    return res.json(results.map(Professor))
  }
}

export default new ProfessorController()
