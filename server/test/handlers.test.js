const supertest = require('supertest')

const { Pokemon } = require('../db')
const { app, server } = require('../index')

const api = supertest(app)

const initialPokemons = [
    {
        name: "charmander",
        img: "45461326644da",
        description: "python",
        pokemonAbilityId: 1,
        pokemonTypeId: 16,
        owner: "ash",
        userId: "1"
    },
    {
        name: "charmander",
        img: "45461326644da",
        description: "python",
        pokemonAbilityId: 1,
        pokemonTypeId: 16,
        owner: "ash",
        userId: "1"
    },
]

beforeEach(async () => {
    await Pokemon.destroy({ truncate: true })

    await Pokemon.create(initialPokemons[1])
    await Pokemon.create(initialPokemons[2])
})

test('return status 200 and json', async () => {
    await api
        .get('/pokemon')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('return all pokemons', async () => {
    const response = await api.get('/pokemon')
    expect(response.body).toHaveLength(initialPokemons.length)
})

test('should 401 Unauthorized', async () => {
    const pokemon = {
        name: "charmander",
        img: "45461326644da",
        description: "python",
        pokemonAbilityId: 1,
        pokemonTypeId: 16,
        owner: "ash",
        userId: "1"
    }

    await api
        .post('/pokemon')
        .send(pokemon)
        .expect(401)

})

describe('delete ', () => {
    // test('should delete pokemon at position 1', async (req, res) => {
    //     req.session.isAuth = true


    //     await api
    //         .delete('/pokemon/1')
    //         .expect(200)
    // })

    test('Should not pass middleware', async () => {
        await api
            .delete('/pokemon/1')
            .expect(401)
    })
})

afterAll(() => {
    server.close()
})
