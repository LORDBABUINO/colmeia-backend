import Parse from 'parse/node'

import Teacher from '../models/Teacher'

class TeacherController {
  async index(req, res) {
    const { name } = req.query
    const Teachers = Parse.Object.extend('Professores')
    const query = new Parse.Query(Teachers)
    if (name) query.matches('nome', new RegExp(`^${name}`, 'i'))
    const results = await query.find()
    return res.json(results.map(Teacher))
  }
}

export default new TeacherController()
