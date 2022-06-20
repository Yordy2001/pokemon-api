import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"



import './profile.css'
import { IPokemon } from '../../interface';
import Pokemon from "../../utils/API/fetchPokemon";


type Props = {}

const pokemonApi = new Pokemon();
const PokeProfile = (_props: Props) => {

    const [pokemon, setPokemon] = useState<IPokemon[]>([])
    let { pokeId } = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPokemon = async () => {
        if (pokeId) {
            try {
                let data = await pokemonApi.getPokemonById(parseInt(pokeId))
                setPokemon(data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        getPokemon()

    }, [pokeId])


    console.log(pokemon)
    return (
        <div className='page-description'>
            {
                pokemon?.map((elem: any, index: any) => {
                    return <>
                        <div className="img">
                            <img src={`${process.env.REACT_APP_SERVER_URL}/images/` + elem?.img} alt={`imagen del pokemon ${elem?.name} `} />
                        </div>

                        <div className="info">
                            <p>{elem?.description}</p>
                        </div>
                    </>
                })
            }

        </div>
    )
}

export default PokeProfile
