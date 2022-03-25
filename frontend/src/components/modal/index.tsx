import axios from "axios";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

import "./modal.css";

type PokemonAbility = {
  id: number;
  ability: string;
};

type PokemonType = {
  id: number;
  type: string;
};

export default function AddUpdatePokemon({
  type,
  ability,
  open,
  onClose,
}: any) {
  const [file, setFile] = useState<File>();
  const [formValue, setformValue] = useState<any>({
    name: "",
    description: "",
    owner: "",
    pokemonTypeId: "",
    pokemonAbilityId: "",
  });

  console.log(ability, type)

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
      await axios.post("http://localhost:5000/pokemon", formData);
    } catch (error) {
      console.log(error);
    }
  }

  if (!open) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
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
            value={formValue.pokemonTypeId}
            id="input_pokemonTypeId"
            name="pokemonTypeId"
            required
          >
            <option value=""  disabled>
              Pokemon Type
            </option>
            {ability?.map((data:any, index:number) => {
                return (
                  <option value={data.ability} key={index}>
                    {data.ability}
                  </option>
                );
              })}
          </select>

          <select
            onChange={handleChangeSelect}
            value={formValue.pokemonAbilityId}
            id="input_pokemonTypeId"
            name="pokemonAbilityId"
            required
          >
            <option value=""  disabled>
              pokemon Ability
            </option>
            {type?.map((data:any, index:number) => {
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
      </div>
    </div>
  );
}
