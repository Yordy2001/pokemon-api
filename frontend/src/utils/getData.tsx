import { useEffect, useState } from 'react'

import fetchPokemon from './API/fetchPokemon'
import { IPokemon, IpokemonAbility, IpokemonType } from '../interface'


const getPokemons = new fetchPokemon()

export default function useFetch() {

    const [pokemons, setPokemons] = useState<IPokemon[]>()
    const [pokemonsAbility, setPokemonsAbility] = useState<IpokemonAbility[]>()
    const [pokemonsType, setPokemonsType] = useState<IpokemonType[]>()

    const getData = async () =>{
        try {
            const pokemons = await getPokemons.getPokemon()
            const ability = await getPokemons.getPokemonAbility()
            const type = await getPokemons.getPokemonType()

            setPokemons(pokemons)
            setPokemonsAbility(ability)
            setPokemonsType(type)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    

    return {pokemons, pokemonsAbility, pokemonsType}

}