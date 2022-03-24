import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
  
    useEffect(() => {
        axios.get('http://localhost:5000/pokemon')
            .then(({ data }) => {
                setPokemon(data)
            })
            .catch(err => { console.log(err) })

    }, [])
    const handleLogout = ()=>{
        axios.get('http://localhost:5000/auth/logout')
                .then(()=>{
                    localStorage.isAuthenticate = false
                    window.location.href = '/login'
                })
                .catch(err=>{console.log(err)})
    }
    return<>
        <div className='header__home'>
            <h1>Pokemon-api</h1>
            <button className='button button-logout' onClick={handleLogout} > logaout</button>
        </div>
        <div className='nav__home'>
            <button className='button' id='addBtn'>ADD</button>
        </div>
        <main>
            <div className='body__home'>
                <div className="card__container">
                    {
                    pokemon?.map((element, index)=>{
                        return <div className="card__content" key={index}>
                        <img src={element.img} alt="asd" />
                        <div className="card_body">
                            <button className='icon delete_card_btn'>
                                <img id='pokemon.id' src="http://localhost:5000/static/image-dev/x-button.png" alt="" />
                            </button>

                            <button className='icon update_card_btn'>
                                <img id='pokemon.id' src="http://localhost:5000/static/image-dev/pencil.png" alt="" />
                            </button>
                            <p>{element.name} </p>
                            <p>{element.owner}</p>
                        </div>
                    </div>
                    })
                    }
                </div>
            </div>
        </main>
        
    </>

}