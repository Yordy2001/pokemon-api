import React, { useState } from 'react'

import './hero.css'
type Props ={
    pokemons:any
}

export default function Hero({ pokemons }:Props) {

    
    return (<>
        <div className='hero'>
            
            {/* <div className='hero-content'>
                <div className='poke-description'>
                    <h2>ads</h2>
                    <p>asdas</p> 
                </div>
                <div className='poke-portada'>
                    <h2>each.name</h2>
                    <p>each.description</p> 
                </div>
            </div> */}
        </div>
      </>
    )
  
}

// { pokemons?.map(( each:any, index:number )=>{
//     return<>
//         <div className='poke-description'>
            
//             <h2>{each.name}</h2>
//             <p>{each.description}</p> 
//         </div>

//         <div className='poke-portada'>
//             a
//             {/* <img src={ 'http://localhost:5000/images/'+each.img } alt={`imagen de ${each.name}`}/> */}
//         </div>
//     </>
//  })   
// }