import React, { useEffect, useState } from 'react'

import '../../style/main.css'
import './home.css'

import fetchAuth from '../../utils/API/fetchAuth'
import AddUpdatePokemon from '../../components/addUpdateForm'
import Pokemon from '../../utils/API/fetchPokemon'
import { IPokemon, IpokemonAbility, IpokemonType } from '../../interface'
import Header from '../../components/header'
import Hero from '../../components/hero/hero'

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
    <div>
        <Header handleLogOut={handleLogout} handleOpenModal={handleOpenModal}></Header>
        
        <Hero pokemons={pokemon}></Hero>

        <main className='main__home'>
            <div className="card__container">
                {
                pokemon?.map((element, index)=>{
                    return <div className="card__content" key={index}>
                    <img src={ 'http://localhost:5000/images/'+element.img } alt={`imagen de ${element.name}`} />
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
        
        <AddUpdatePokemon type={pokemonType} ability={pokemonAbility} onClose={handleClose} open={openModal}/>
        
    </div>
    </>

}
