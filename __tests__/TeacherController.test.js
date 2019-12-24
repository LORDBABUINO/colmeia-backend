import supertest from 'supertest'
import app from '../src/app'

describe('API', function() {
  this.timeout(Infinity)

  it('should GET /teachers', async function() {
    await supertest(app)
      .get('/teachers')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
