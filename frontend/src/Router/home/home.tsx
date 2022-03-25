import axios from 'axios'
import React, { useEffect, useState } from 'react'

import AddUpdatePokemon from '../../components/modal'

import './home.css'

export default function Home() {
    type User=[{
        id: number,
        name: string,
        img: any,
        description: string,
        owner: string,
        pokemonAbilityId: number,
        pokemonTypeId: number
    }]
  
    const [pokemon, setPokemon] = useState<User>()
    const [pokemonAbility, setPokemonAbility] = useState<any>()
    const [pokemonType, setPokemonType] = useState<any>()

    const [openModal, setOpenModal] = useState(false)
    const handleClose=()=>{
        setOpenModal(false)
    }
    const getData= async()=>{
        const {data} = await axios.get('http://localhost:5000/pokemon')
        
        setPokemon(data.pokemon)
        setPokemonAbility(data.pokemonAbility)
        setPokemonType(data.pokemonType)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleLogout = ()=>{
        axios.get('http://localhost:5000/auth/logout')
            .then(()=>{
                localStorage.isAuthenticate = false
                window.location.href = '/login'
            })
            .catch(err=>{console.log(err)})
    }

    const handleOpenModal =()=>{
        setOpenModal(true)
    }
    return<>

    <div className="body__home">
        <header className='header_home'>
            <h1>Poke-api</h1>
            <nav className='nav__home'>
                <button className='button' id='addBtn' onClick={handleOpenModal}>ADD</button>
                <button className=' button button-logout' onClick={handleLogout} >LOGAOUT</button>
             </nav>
        </header>

        <main className='main__home'>
            <div className="card__container">
                {
                pokemon?.map((element, index)=>{
                    return <div className="card__content" key={index}>
                    <img src={ 'http://localhost:5000/images/'+element.img } alt="asd" />
                    <div className="card_body">
                        <div className="icon-box">
                            <button className='icon delete_card_btn'>
                                <img id='pokemon.id' src="http://localhost:5000/static/image-dev/x-button.png" alt="" />
                            </button>

                            <button className='icon update_card_btn'>
                                <img id='pokemon.id' src="http://localhost:5000/static/image-dev/pencil.png" alt="" />
                            </button>
                        </div>
                        <p>{element.name} </p>
                        <p>{element.owner}</p>
                    </div>
                </div>
                })
                }
            </div>
        </main>
        {
           <AddUpdatePokemon type={pokemonType} ability={pokemonAbility} onClose={handleClose} open={openModal}/>
        }
    </div>
    </>

}
