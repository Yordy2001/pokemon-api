import React, { useState } from 'react'

import './header.css'

type Props = { 
  handleLogOut: ()=> void
  handleOpenModal: ()=> void
}


export default function Header( {handleLogOut, handleOpenModal}: Props) {


 const [IsOpen, setIsOpen] = useState(false)

 const handleNav = ( ) =>{
    setIsOpen(!IsOpen)
 }

  return (
    <>
    <div className='header_home'>
      <h1>Poke-api</h1>

      <div className='open_nav' ><button className='button button-logout' onClick={handleNav}>&equiv;</button> </div>
      { IsOpen && <div className='nav__home'>
        <p onClick={handleNav}>&equiv;</p>
        <ul>
          <li><button className='button' id='addBtn' onClick={handleOpenModal}>ADD</button></li>
          <li><button className=' button button-logout' onClick={handleLogOut} >LOGAOUT</button> </li>
        </ul>
      
        </div>
      }
    </div>
    
    
    </>
  )
}
