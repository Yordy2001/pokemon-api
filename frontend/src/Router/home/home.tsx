import React, { useEffect, useState } from 'react'

import '../../assets/style/main.css'
import './home.css'

import fetchAuth from '../../utils/API/fetchAuth'
import AddUpdatePokemon from '../../components/addForm'
import Pokemon from '../../utils/API/fetchPokemon'
import Header from '../../components/header'
import Hero from '../../components/hero/hero'
import { useFetch } from '../../utils/getData'
import UpdatePokemon from '../../components/updatePokemon/UpdatePokemonForm'

// Fetch Instance
const pokemonApi = new Pokemon();
const AuthApi = new fetchAuth();

export default function Home() {

    const { pokemons, pokemonsAbility, pokemonsType } = useFetch()

    const [pokeId, setPokeId] = useState<number>(0)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openUpdateModal, setOpenUpdatePokemon] = useState<boolean>(false)

    const handleLogout = async () => {
        try {
            await AuthApi.logOut()
            localStorage.isAuthenticate = false
            window.location.href = '/login'
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (e: any, id: number) => {
        try {
            await pokemonApi.deletePokemon(id)
            // useFetch()

        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = async () => {
        setOpenModal(false)
    }

    const handleAddModal = () => {
        setOpenModal(true)
    }
    const handleUpdateModal = () => {
        setOpenUpdatePokemon(true)
    }
    return <>
        <div>
            <Header handleLogOut={handleLogout} handleOpenModal={handleAddModal}></Header>

            <Hero></Hero>

            <main className='main__home'>
                <div className="card__container">
                    {
                        pokemons?.map((pokemon, index) => {
                            return <div className='card-box' key={index}>
                                <div className='card_display'>
                                    <div className="card__content" key={index}>
                                        <img src={'http://localhost:5000/images/' + pokemon.img} alt={`imagen de ${pokemon.name}`} />
                                        <div className={`card_body ${pokemon.pokemonAbilityId}`}>
                                            <div className="icon-box">
                                                <button className='icon delete_card_btn' onClick={() => {
                                                    handleDelete(Event, pokemon.id);
                                                }
                                                }>
                                                    <img key={pokemon.id} src="http://localhost:5000/static/image-dev/x-button.png" alt='' />
                                                </button>

                                                <button className='icon update_card_btn' onClick={() => {
                                                    setPokeId(pokemon.id)
                                                    handleUpdateModal()
                                                }}>
                                                    <img src="http://localhost:5000/static/image-dev/pencil.png" alt="" />
                                                </button>
                                            </div>
                                            <p>{pokemon.name} </p>
                                        </div>

                                    </div>
                                    <div className='poke_description'>
                                        <h1>{pokemon.name}</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente voluptatibus veniam enim dolore illum assumenda hic ex provident fugit sed, beatae numquam, ab deserunt excepturi saepe asperiores explicabo eligendi?</p>
                                        {/* {pokemon.description} */}
                                        <div className='foother-card'>
                                            <p>{pokemon.owner}</p>
                                            {/* <p>{pokemon.pokemonAbilityId}</p> */}
                                            <p> <img src={`http://localhost:5000/static/image-dev/icons_type/${pokemon.pokemonTypeId}.png`} alt="" /></p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>
            </main>

            {
                <UpdatePokemon
                    pokeId={pokeId}
                    open={openUpdateModal}
                    onClose={handleClose}
                />
            }

            {
                <AddUpdatePokemon
                    type={pokemonsType}
                    ability={pokemonsAbility}
                    onClose={handleClose}
                    open={openModal}
                    pokeId={pokeId}
                />
            }
        </div>
    </>

}
