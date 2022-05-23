import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';


import './dashboard.css'
import { useFetch } from '.././../utils/getData'
import { IPokemon } from '../../interface';
import Pokemon from "../../utils/API/fetchPokemon";

type Props = {}


const columns = [
    { field: 'name', width: 150 },
    { field: 'type', width: 150 },
    { field: 'ability', width: 150 },
    { field: 'owner', width: 150 },
    { field: 'img', width: 150 },
];
const rows = [
    { id: 1, name: 'Hello', },
    { id: 2, type: 'DataGridPro', },
    { id: 4, ability: 'MUI', },
    { id: 5, owner: 'MUI', },
    { id: 6, img: 'MUI', },
];

const pokemonApi = new Pokemon();
const Dashboard = (props: Props) => {

    const [search, setsearch] = useState<string>('')
    const [pokemon, setpokemon] = useState()
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
    console.log(pokemons)
    return (
        <div className='page_dashboard'>
            <aside>
                <div className="user_profile">
                    <img src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/charizard.png`} alt="" />
                    <form>
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
            <div className='top-container'>
                <h2>Admin Site</h2>
                {/* <form className='form-dash' onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" />
                </form> */}
                {/* <img className='icon-lupa' src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/lupa.png`} alt="" /> */}
            </div>
            <div className='container'>
                
                <DataGrid style={{height:400}}
                    rows={rows}
                    columns={columns}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            
            </div>

        </div>
    )
}

export default Dashboard
