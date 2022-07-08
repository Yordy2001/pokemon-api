import React, { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import './addUpdate.css';
import Pokemon from '../../utils/API/fetchPokemon';
import Modal from '../modal';
import { IpokemonAbility, IpokemonType } from '../../interface';

type Props = {
  type?: IpokemonType[];
  ability?: IpokemonAbility[];
  onClose: () => void;
  open: Boolean;
  pokeId: number;
};

type formValues = {
  name: string;
  description: string;
  owner: string;
  pokeTypeName: string;
  pokeAbilityName: string;
};

// pokemon fetch instance
const pokemonApi = new Pokemon();

export default function AddUpdatePokemon({
  type,
  ability,
  onClose,
  open,
}: Props) {
  const initialState = {
    name: '',
    description: '',
    owner: '',
    pokeTypeName: '',
    pokeAbilityName: '',
  };

  const { register, handleSubmit, reset } = useForm<formValues>({
    defaultValues: initialState,
  });
  const [file, setFile] = useState<File>();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const onSubmit = handleSubmit(async (data, e: any) => {
    e.preventDefault();

    const formData = new FormData();
    try {
      formData.set('avatar', file!);

      for (let [key, value] of Object.entries(data)) {
        formData.set(key, value);
      }

      await pokemonApi.postPokemon(formData);
      onClose();
      reset(initialState);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <input {...register('name')} placeholder="name" required />
        <input
          onChange={handleFile}
          type="file"
          name="avatar"
          placeholder="img"
          required
        />
        <input
          {...register('description')}
          placeholder="Description"
          required
        />
        <input {...register('owner')} placeholder="owner" required />
        <select {...register('pokeTypeName')} required>
          <option value="" selected disabled>
            Pokemon Type
          </option>

          {type?.map((data: any, index: number) => {
            return (
              <option className="pokemon_type" value={data.type} key={index}>
                {data.type}
              </option>
            );
          })}
        </select>

        <select {...register('pokeAbilityName')} required>
          <option value="" selected disabled>
            pokemon Ability
          </option>
          {ability?.map((data: any, index: number) => {
            return (
              <option value={data.ability} key={index}>
                {data.ability}
              </option>
            );
          })}
        </select>

        <button type="submit" className="enviar">
          {onSubmit}
          ADD
        </button>
      </form>
    </Modal>
  );
}
