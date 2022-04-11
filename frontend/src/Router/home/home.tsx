import React, { useEffect, useState } from 'react'

import '../../style/main.css'
import './home.css'

import fetchAuth from '../../utils/API/fetchAuth'
import AddUpdatePokemon from '../../components/addUpdateForm'
import Pokemon from '../../utils/API/fetchPokemon'
import Header from '../../components/header'
import Hero from '../../components/hero/hero'
import useFetch from '../../utils/getData'
import UpdatePokemon from '../../components/updatePokemon/UpdatePokemonForm'

// Fetch Instance
const pokemonApi = new Pokemon();
const AuthApi = new fetchAuth();

export default function Home() {

    const {pokemons, pokemonsAbility, pokemonsType} = useFetch()

    const [pokeId, setPokeId] = useState<number>(0)
    const [addOrUpdate, setaddOrUpdate] = useState('ADD')
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openUpdateModal, setOpenUpdatePokemon] = useState<boolean>(false)

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
            // useFetch()

        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = async()=>{
        setOpenModal(false)
    }

    const handleAddModal = ()=>{
        setOpenModal(true)
    }
    const handleUpdateModal = ()=>{
        setOpenUpdatePokemon(true)
    }
    return<>
    <div>
        <Header handleLogOut={handleLogout} handleOpenModal={handleAddModal}></Header>
        
        <Hero pokemons={pokemons}></Hero>

        <main className='main__home'>
            <div className="card__container">
                {
                pokemons?.map((element, index)=>{
                    return <div className="card__content" key={index}>
                    <img src={ 'http://localhost:5000/images/'+element.img } alt={`imagen de ${element.name}`} />
                    <div className="card_body">
                        <div className="icon-box">
                            <button className='icon delete_card_btn' onClick={()=>{
                                handleDelete(Event, element.id);}
                            }>
                                <img key={element.id} src="http://localhost:5000/static/image-dev/x-button.png" alt='' />
                            </button>

                            <button className='icon update_card_btn' onClick={()=>{
                                setPokeId(element.id)
                                handleUpdateModal()
                            }}>
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
                addOrDelete={addOrUpdate}
                pokeId={pokeId}
            />
        }       
    </div>
    </>

}
