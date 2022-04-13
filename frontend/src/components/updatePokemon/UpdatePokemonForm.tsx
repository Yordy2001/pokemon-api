import React, { ChangeEvent, useState } from 'react'
import Pokemon from '../../utils/API/fetchPokemon'
import { IPokemon, IpokemonType, IpokemonAbility } from '../../interface'
import Modal from '../modal'


type Props = {
    type?: IpokemonType[],
    ability?: IpokemonAbility[], 
    pokeId: number,
    open: Boolean,
    onClose: () => void
}

const pokemonApi = new Pokemon()

export default function UpdatePokemon({ ability , type, pokeId, open, onClose }: Props ) {

    let inicialState = {
        name: '',
        description: "",
        owner: "",
        pokemonAbility: '',
        pokemonType: ''
    }
    const [PokemonForm, setPokemonForm] = useState(inicialState)
    const [file, setFile] = useState<File>();

    // const getData = async () => {
    //     try {
    //         const {data} = await pokemonApi.getPokemonById(pokeId)
    //         // pokemon.forEach(({data}:any) => {
    //         //     // setPokemons(data)
    //         //     console.log(data)
    //         // })
    //         console.log(data)
    //     } catch (error) {

    //     }
    // }

    // useEffect(() => {
    //     getData()
    // }, [pokeId])

    const handleSubmit = async (e:any) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.set("avatar", file!);

        for (let [key, value] of Object.entries(PokemonForm)) {
            formData.set(key, JSON.stringify(value));
        }

        try {
            await pokemonApi.putPokemon(pokeId, formData )
            onClose()
        } catch (error) {
            console.log(error)
        }
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

    return (
        <Modal open={open} onClose={onClose}>
            <form action="" onSubmit={ handleSubmit }>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <input
                    onChange={ handleChangeInput }
                    // value={}
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
                    // value={}
                    id="input_description"
                    type="text"
                    name="description"
                    placeholder="description"
                    required
                />
                <input
                    onChange={ handleChangeInput }
                    // value={}
                    id="input_owner"
                    type="text"
                    name="owner"
                    placeholder="owner"
                    required
                />
                <select
                    onChange={ handleChangeSelect}
                    // value={ }
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
                    onChange={ handleChangeSelect}
                    // value={ }
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
                <button type="submit" className='enviar'>
                    UPDATE
                </button> 
            </form>   
        </Modal>
    )
}
