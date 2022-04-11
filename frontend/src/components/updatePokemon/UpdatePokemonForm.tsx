import React, { ChangeEvent, useEffect, useState } from 'react'
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
    
    const [file, setFile] = useState<File>();
    const [PokemonForm, setPokemonForm] = useState({
        name: '',
        description: "",
        owner: "",
        pokemonAbility: '',
        pokemonType: ''
    })
    const [pokemons, setPokemons] = useState<IPokemon[]>()

    const getData = async () => {
        try {
            const pokemon = await pokemonApi.getPokemonById(pokeId)
            pokemon.forEach(({data}:any) => {
                setPokemons(data)
            })
            console.log(pokemon)
        } catch (error) {

        }
    }

    useEffect(() => {

        getData()

    }, [pokeId])

    const handleSubmit = () =>{
        console.log("submited")
    }

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0]);
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        setPokemonForm({
            ...PokemonForm,
            [e.target.name]: value,
        });
    };
    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value;

        setPokemonForm({
            ...PokemonForm,
            [e.target.name]: value,
        });
    };
    console.log(pokemons)
    return (
        <Modal open={open} onClose={onClose}>
            
            <form action="" onSubmit={ handleSubmit }>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <input
                    onChange={ handleChangeInput }
                    // value={pokemon.name}
                    id="input_name"
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                />
                <input
                    onChange={ handleFile }
                    id="input_img"
                    type="file"
                    name="avatar"
                    placeholder="img"
                    required
                />
                <input
                    onChange={ handleChangeInput }
                    id="input_description"
                    type="text"
                    name="description"
                    placeholder="description"
                    required
                />
                <input
                    onChange={ handleChangeInput }
                    id="input_owner"
                    type="text"
                    name="owner"
                    placeholder="owner"
                    required
                />
                {/* <select
                    onChange={ handleChangeSelect}
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
                </select> */}
{/* 
                <select
                    onChange={ handleChangeSelect}
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
                </select> */}
                <button type="submit">

                    Update
                </button> 
            </form>   

        </Modal>

    )
}

