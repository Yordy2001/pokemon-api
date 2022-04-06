import React, { useEffect, useState } from 'react'

import './home.css'
import fetchAuth from '../../utils/API/fetchAuth'

import AddUpdatePokemon from '../../components/addUpdateForm'
import Pokemon from '../../utils/API/fetchPokemon'
import { IPokemon, IpokemonAbility, IpokemonType } from '../../interface'

// Fetch Instance
const pokemonApi = new Pokemon();
const AuthApi = new fetchAuth();

export default function Home() {

    const [pokemon, setPokemon] = useState<IPokemon[]>()
    const [pokemonAbility, setPokemonAbility] = useState<IpokemonAbility[]>()
    const [pokemonType, setPokemonType] = useState<IpokemonType[]>()

    const [openModal, setOpenModal] = useState<Boolean>(false)

    const getData= async()=>{
        try {
            const pokemons = await pokemonApi.getPokemon()
            const pokemonsAbility = await pokemonApi.getPokemonAbility()
            const pokemonsType = await pokemonApi.getPokemonType()
         
            setPokemon(pokemons)
            setPokemonAbility(pokemonsAbility)
            setPokemonType(pokemonsType)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()  
    }, [])

    const HandleAddOrUpdate =(e:any, id:number)=>{
        console.log('first')
    }
    const handleLogout = async ()=>{
        try {
            await AuthApi.logOut()
            localStorage.isAuthenticate = false
            window.location.href = '/login'
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async(e:any, id:number)=>{
        try {
            await pokemonApi.deletePokemon(id)
            await getData()

        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = async()=>{
        setOpenModal(false)
        await getData()
    }

    const handleOpenModal = ()=>{
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
                            <button className='icon delete_card_btn' onClick={()=>{
                                handleDelete(Event, element.id);}
                            }>
                                <img key={element.id} src="http://localhost:5000/static/image-dev/x-button.png" alt='' />
                            </button>

                            <button className='icon update_card_btn'>
                                <img  src="http://localhost:5000/static/image-dev/pencil.png" alt="" />
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
           <AddUpdatePokemon
            type={pokemonType}
            ability={pokemonAbility}
            onClose={handleClose}
            open={openModal}
            />
        }       
    </div>
    </>

}
