
import { useState, ChangeEvent } from 'react'

import './addUpdate.css'
import Pokemon from '../../utils/API/fetchPokemon';
import Modal from '../modal';

const PokemonApi = new Pokemon()
export default function AddUpdatePokemon({ type, ability, onClose, open }: any) {

    const [file, setFile] = useState<File>();
    const [formValue, setformValue] = useState<any>({
        name: "",
        description: "",
        owner: "",
        pokeTypeName: "",
        pokeAbilityName: "",
    });

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0]);
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        setformValue({
            ...formValue,
            [e.target.name]: value,
        });
    };
    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value;

        setformValue({
            ...formValue,
            [e.target.name]: value,
        });
    };

    async function handleSubmit(e: any) {
        e.preventDefault();

        // add image to formData
        const formData = new FormData();
        formData.set("avatar", file!);

        for (let [key, value] of Object.entries(formValue)) {
            formData.set(key, JSON.stringify(value));
        }
        try {
            await PokemonApi.post('pokemon/', formData)
            onClose()
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Modal open={open}>
            <form action="" onSubmit={handleSubmit}>
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <input
                onChange={handleChangeInput}
                id="input_name"
                type="text"
                name="name"
                placeholder="name"
                required
            />
            <input
                onChange={handleFile}
                id="input_img"
                type="file"
                name="avatar"
                placeholder="img"
                required
            />
            <input
                onChange={handleChangeInput}
                id="input_description"
                type="text"
                name="description"
                placeholder="description"
                required
            />
            <input
                onChange={handleChangeInput}
                id="input_owner"
                type="text"
                name="owner"
                placeholder="owner"
                required
            />
            <select
                onChange={handleChangeSelect}
                value={formValue.pokeTypeName}
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
                onChange={handleChangeSelect}
                value={formValue.pokeAbilityName}
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

            <button type="submit" id="enviar">
                {" "}
                Enviar
            </button>
        </form>
        </Modal>
        
    )
}
