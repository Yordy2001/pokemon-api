const supertest = require('supertest')
const { app, server } = require('../index')

const api = supertest(app)

test('return all pokemon', async () => { 
    await api
        .get('/pokemon')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterAll( ()=>{ 
    server.close()
})
