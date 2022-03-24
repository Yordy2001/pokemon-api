import axios from 'axios'
import React, { useState } from 'react'

import './modal.css'

type PokemonAbility=[{
  id: number,
  ability: string
}]

type PokemonType=[{
    id: number,
    type: string
}]

export default function AddUpdatePokemon({type, ability, open}:any) {

  const [file, setFile] = useState<any>(null)

  const [formValue, setformValue] = useState<any>({
    name:"",
    description:"",
    owner:"",
    pokemonTypeId:"",
    pokemonAbilityId:"",
  })

  const [Ability, setAbility] = useState<PokemonAbility>(ability)
  const [pokemonType, setPokemonType] = useState<PokemonType>(type)

  const handleFile = (e:any)=>{
    setFile(e.target.files[0])
  }
  const handleChange =(e:any)=>{
    let value = e.target.value

    setformValue({
      ...formValue,
      [e.target.name]:value
    })
  }

  async function handleSubmit(e:any){ 
    e.preventDefault()

    // add image to formData
    const formData = new FormData()
    formData.append('avatar', file)
    formData.append('data', formValue)

    await axios.post('http://localhost:5000/pokemon', 
      formData,
      // {
      //   headers:  {
      //     "Accept": "application/json", 
      //     "Content-Type": "multipart/form-data" 
      //     }
      // }
    )
    .then(response =>{console.log(response)})
    .catch(err =>{console.log(err)})

  }

  const handleModal = (e:any) =>{
    // let modal = document.getElementById('myModal')
    // modal.style.display = 'none'
  }

  return (
    <div className='modal' id='myModal' >
      <div className="modal-content">
        <form action="" onSubmit={handleSubmit}  >
          <span className='close' onClick={handleModal}>&times;</span>
          <input onChange={handleChange} id='input_name'  type="text" name='name' placeholder='name' required/>
          <input onChange={handleFile} id='input_img'  type='file' name='avatar' placeholder='img' required />
          <input onChange={handleChange} id='input_description'  type='text' name='description' placeholder='description' required />
          <input onChange={handleChange} id='input_owner'  type='text' name='owner' placeholder='owner' required />
          <select onChange={handleChange} value={formValue.pokemonTypeId} id='input_pokemonTypeId' name='pokemonTypeId' required>
              <option value="" selected disabled>PokemonTypeId</option>
              {
                Ability && Ability.map((data, index) =>{
                  return <option value={data.ability} key={index}> 
                    {data.ability}
                  </option>
                })
              }
          </select>

          <select onChange={handleChange} value={formValue.pokemonAbilityId} id='input_pokemonTypeId' name='pokemonAbilityId' required>
              <option value="" selected disabled>pokemonAbilityId</option>
              {
                pokemonType&&pokemonType.map(( data, index ) =>{
                  return <option value={data.type} key={index}>
                    {data.type}
                  </option>
                })
              }
          </select>

          <button type="submit" id='enviar'> Enviar</button>
        </form>
      </div>
    </div>
  )
}
