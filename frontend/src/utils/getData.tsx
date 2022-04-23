import { useEffect, useState } from 'react'

import fetchPokemon from './API/fetchPokemon'
import { IPokemon, IpokemonAbility, IpokemonType } from '../interface'

const getPokemons = new fetchPokemon()

export function useFetch() {

    const [pokemons, setPokemons] = useState<IPokemon[]>()
    const [pokemonsAbility, setPokemonsAbility] = useState<IpokemonAbility[]>()
    const [pokemonsType, setPokemonsType] = useState<IpokemonType[]>()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const pokemons = await getPokemons.getPokemon()
            const ability = await getPokemons.getPokemonAbility()
            const type = await getPokemons.getPokemonType()

            setPokemons(pokemons)
            setPokemonsAbility(ability)
            setPokemonsType(type)
            setLoading(false)
            

        } catch (error) {
            setError(`Ha ocurrido un error, ${error}`)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { pokemons, pokemonsAbility, pokemonsType, loading, getData }
}

