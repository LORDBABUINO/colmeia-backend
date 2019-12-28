/* eslint import/first: 0 */ // --> OFF
import supertest from 'supertest'

jest.mock('parse/node')
import { Query } from 'parse/node'
import app from '../src/app'

describe('API', () => {
  beforeAll(async () => {
    Query.mockImplementation(() => ({
      find: async () => [],
      matches: () => {},
    }))
  })

  afterEach(() => {
    Query.mockClear()
  })

  it('should GET /teachers', async () => {
    await supertest(app)
      .get('/teachers')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
