import axios from 'axios'
import { useEffect, useState } from 'react'

import './home.css'
import AddUpdatePokemon from '../../components/addUpdateForm'
import Pokemon from '../../utils/API/fetchPokemon'
import { IPokemon, IpokemonAbility, IpokemonType } from '../../interface'

// Fetch Instance
const pokemonApi = new Pokemon();

export default function Home() {

    const [pokemon, setPokemon] = useState<IPokemon[]>()
    const [pokemonAbility, setPokemonAbility] = useState<IpokemonAbility[]>()
    const [pokemonType, setPokemonType] = useState<IpokemonType[]>()
    const [id, setId] = useState<number>(0)

    const [openModal, setOpenModal] = useState(false)

    const getData= async()=>{
        try {
            const pokemons = await pokemonApi.get('/pokemon/')
            const pokemonsAbility = await pokemonApi.get('/pokemon/poke-ability')
            const pokemonsType = await pokemonApi.get('/pokemon/poke-type')
         
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
            await axios.get('http://localhost:5000/auth/logout')
            localStorage.isAuthenticate = false
            window.location.href = '/login'
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async(e:any)=>{
        console.log(id)
        // try {
        //     await pokemonApi.delete(`/pokemon/id/${id}`) 
        //     window.location.reload()
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const handleClose= async()=>{
        setOpenModal(false)
        await getData()
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
                    return <div className="card__content" key={element.id}>
                    <img src={ 'http://localhost:5000/images/'+element.img } alt="asd" />
                    <div className="card_body">
                        <div className="icon-box">
                            <button className='icon delete_card_btn' onClick={()=>{
                                handleDelete(Event)
                                setId(element.id)}
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
           <AddUpdatePokemon type={pokemonType} ability={pokemonAbility} onClose={handleClose} open={openModal}/>
        }
    </div>
    </>

}
