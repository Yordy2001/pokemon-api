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
    const [search, setsearch] = useState<string>('')
    const {
        pokemons,
        pokemonsAbility,
        pokemonsType,
        loading,
        getData
    } = useFetch();

    const handleSubmit = (e:any) => {
        e.preventDefaul()
        console.log(search)
    }

    const handleChange = (e:any)=>{
        e.preventDefault()
        let value = e.target.value
        setsearch(value)
    }
    return (
        <div className='page_dashboard'>
            <aside>
                <div className="user_profile">
                    <img src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/charizard.png`} alt="" />
                    <input type="text" defaultValue={'User Name'} />
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
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="text" className='input_dashboard' />
                        </form>
                        <img className='icon-lupa' src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/lupa.png`} alt="" />
                    </div>
                </header>
                <div className='bars_container'>

                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Owner</th>
                        <th>Ability</th>
                        <th>type</th>
                        <th>Img</th>
                    </tr>
                    {pokemons?.map((pokemon, index) => {
                        return (
                            <tr key={index}>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.description}</td>
                                <td>{pokemon.owner}</td>
                                <td>{pokemon.pokemonAbilityId}</td>
                                <td>{pokemon.pokemonTypeId}</td>
                                <td>{pokemon.img}</td>
                            </tr>
                        )
                    })}
                </table>

            </div>

        </div>
    )
}

export default Dashboard
