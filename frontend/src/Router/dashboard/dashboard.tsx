import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './dashboard.css'

import Header from '../../components/header/index'
import { useFetch } from '.././../utils/getData'
import fetchAuth from '../../utils/API/fetchAuth'
import Pokemon from "../../utils/API/fetchPokemon";

type Props = {}

const pokemonApi = new Pokemon();
const AuthApi = new fetchAuth();

const Dashboard = (props: Props) => {
    const initialState = {
        id:0,
        name: '',
        description: '',
        owner: '',
        pokeTypeName: '',
        pokeAbilityName: '',
    }

    const [search, setsearch] = useState<string>('')
    const [pokemon, setpokemon] = useState(initialState)
    const {
        pokemons,
    } = useFetch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        getPokemon()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPokemon = async () => {
        let data = await pokemonApi.getPokemonByName(search)
        setpokemon(data)
    }

    const handleChange = (e: any) => {
        let value = e.target.value
        setsearch(value)
    }
    console.log(pokemon?.id)
    return (
        <div className='page_dashboard'>
            <aside>
                <div className="user_profile">
                    <img src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/charizard.png`} alt="" />
                    <form onClick={handleSubmit}>
                        <input onChange={handleChange} type="text" defaultValue={'User Name'} />
                    </form>
                    <hr />
                </div>

                <nav className='nav_dashboard'>
                    <ul>
                        <li>Home</li>
                        <li>Summary</li>
                        <li>User</li>
                        <li>Pokemons</li>
                    </ul>
                </nav>
            </aside>
            <div className='container'>
                <header>
                    <div className='heading'>
                        <form className='form-dash' onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="text" />
                        </form>
                        <img className='icon-lupa' src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/lupa.png`} alt="" />
                    </div>
                </header>
                <div className='bars_container'>
                    {/* <img src={`${process.env.REACT_APP_SERVER_URL}/images/${pokemon?.img}`} alt={`imagen de ${pokemon?.name}`} /> */}

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Owner</th>
                            <th>Ability</th>
                            <th>type</th>
                            <th>Img</th>
                        </tr>
                    </thead>

                    {pokemons?.map((pokemon, index) => {
                        return (
                            <tbody>
                                <tr key={index}>
                                    <td>{pokemon.name}</td>
                                    <td>{pokemon.description}</td>
                                    <td>{pokemon.owner}</td>
                                    <td>{pokemon.pokemonAbilityId}</td>
                                    <td>{pokemon.pokemonTypeId}</td>
                                    <td>{pokemon.img}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>

            </div>

        </div>
    )
}

export default Dashboard
