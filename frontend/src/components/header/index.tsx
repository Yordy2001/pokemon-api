import React, { useState } from 'react'

import './header.css'

type Props = { 
  handleLogOut: ()=> void
  handleOpenModal: ()=> void
}


export default function Header( {handleLogOut, handleOpenModal}: Props) {

  const [IsOpen, setIsOpen] = useState(true)

  const handleNav = ( ) =>{
    setIsOpen(!IsOpen)
  }

  return (
    <>
    <div className='header_home'>
      <h1 className='title'>Poke-api</h1>

      <p className='open_nav' onClick={handleNav}>&equiv;</p>

      <div className= {IsOpen ? 'nav__home' : "hidden_menu"}>
        <p className='open_nav'  onClick={handleNav}>&equiv;</p>
        <ul>
          <li><button className='button' id='addBtn' onClick={handleOpenModal}>ADD</button></li>
          <li><button className=' button button-logout' onClick={handleLogOut}> Log Out </button> </li>
        </ul>

      </div> 
    </div>
    
    
    </>
  )
}
