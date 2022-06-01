import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"

import './dashboard.css'
import { useFetch } from '.././../utils/getData'
import Pokemon from "../../utils/API/fetchPokemon";
import { IPokemon } from '../../interface';

type Props = {}

// Table coloms
const columns = [
    { field: 'id', width: 150 },
    { field: 'name', width: 150 },
    { field: 'description', width: 150 },
    { field: 'pokemonAbilityId', width: 150 },
    { field: 'pokemonTypeId', width: 150 },
    { field: 'owner', width: 150 },
    { field: 'img', width: 150 },
];

const pokemonApi = new Pokemon();
const Dashboard = (_props: Props) => {
    const {
        pokemons,
        pokemonsType
    } = useFetch();

    const initialState  = pokemons[3]
    const [search, setsearch] = useState<string>('')
    const [pokemon, setpokemon] = useState<IPokemon>()
    const [fivePokemos, setFivePokemos] = useState<IPokemon[]>()

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

    // const reduce = () =>{
      
    // }
    useEffect(() => {
        setpokemon(initialState)
        // reduce()
    },[initialState])
    
    return (
        <div className='page_dashboard'>
            <aside>
                <div className="user_profile">
                    <div className='perfil'>
                        <label htmlFor="input_profile"> <img src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/charizard.png`} alt="" /></label>
                        <input id='input_profile' type="file" className='input_profile' />
                    </div>
                    <form>
                        <input onChange={handleChange} type="text" defaultValue={'User Name'} />
                    </form>
                </div>

                <nav className='nav_dashboard'>
                    <ul>
                        <Link to='/' className='link'>Home</Link>
                        <Link to={''} className='link'>Summary</Link>
                        <Link to={''} className='link'>User</Link>
                        <Link to={''} className='link'>Pokemons</Link>
                    </ul>
                </nav>
            </aside>
            <div className='top-container'>
                <h2>Admin Site</h2>
                <form className='form-dash' onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" />
                </form> 
                {/* <span><img className='icon-lupa' src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/lupa.png`} alt="" /></span> */}
            </div>
            <div className='container'>
                <div className='manage_data'>
                    <div className='show_data'>
                        <div className='poke_info'>
                            <div className="badge">{pokemon?.name.toLocaleUpperCase()}</div>
                            <div className="badge">{pokemon?.owner.toLocaleUpperCase()}</div>
                            <div className="badge">{pokemon?.pokemonTypeId}</div>
                            <div className="badge">{pokemon?.pokemonAbilityId}</div>
                        </div>
                        <div className='poke_img'>
                            <img src={`${process.env.REACT_APP_SERVER_URL}/images/` + pokemon?.img} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bars bars_container'>
                    <h4>Types</h4>
                    {/* <div className='bars'>
                        {pokemonsType?.map((type, index) =>{
                            return <div className='light-grey' key={index}>
                                <div className="bars_type" style={{
                                    backgroundColor: 'yellow',
                                    width: "45%",
                                }}>{type.type}</div>
                            </div>
                        })}
                    </div> */}
                </div>
                <DataGrid className='table' style={{ height: 400, width: 950, }}
                    rows={pokemons}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Dashboard
