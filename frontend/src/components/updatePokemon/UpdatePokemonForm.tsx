import React, { useEffect, useState } from 'react'
import Pokemon from '../../utils/API/fetchPokemon'
import { IPokemon } from '../../interface'
import Modal from '../modal'

type Props = {
    pokeId: number,
    open: Boolean,
    onClose: () => void
}

const pokemonApi = new Pokemon()

export default function UpdatePokemon({ pokeId, open, onClose }: Props) {

    const [PokemonForm, setPokemonForm] = useState({
        name: '',
        description: "",
        owner: "",
        pokemonAbility: '',
        pokemonType: ''
    })

    const [pokemon, setPokemon] = useState<IPokemon[]>()

    const getData = async () => {
        try {
            const pokemon = await pokemonApi.getPokemonById(pokeId)
            setPokemonForm(pokemon)
        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
    }, [pokeId])

    pokemon?.forEach(data => {
        console.log(data.name)
    })

    return (
        <Modal open={open} onClose={onClose}>
            <div>
                UPDATED
            </div>
            {/* <form action="" onSubmit={ }>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <input
                    onChange={ }
                    id="input_name"
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                />
                <input
                    onChange={ }
                    id="input_img"
                    type="file"
                    name="avatar"
                    placeholder="img"
                    required
                />
                <input
                    onChange={ }
                    id="input_description"
                    type="text"
                    name="description"
                    placeholder="description"
                    required
                />
                <input
                    onChange={ }
                    id="input_owner"
                    type="text"
                    name="owner"
                    placeholder="owner"
                    required
                />
                <select
                    onChange={ }
                    value={ }
                    id="input_pokemonTypeId"
                    name="pokeTypeName"
                    required
                >
                    <option value="" disabled>
                        Pokemon Type
                    </option>
                    {ability?.map((data: any, index: number) => {
                        return (
                            <option value={data.ability} key={index}>
                                {data.ability}
                            </option>
                        );
                    })}
                </select>

                <select
                    onChange={ }
                    value={ }
                    id="input_pokemonTypeId"
                    name="pokeAbilityName"
                    required
                >
                    <option value="" disabled>
                        pokemon Ability
                    </option>
                    {type?.map((data: any, index: number) => {
                        return (
                            <option value={data.type} key={index}>
                                {data.type}
                            </option>
                        );
                    })}
                </select>
                <button type="submit">
                    { }
                    { }
                </button> 
            </form>    */}

        </Modal>

    )
}

