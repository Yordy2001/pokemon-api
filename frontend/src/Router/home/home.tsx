import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/style/main.css";
import "./home.css";

import fetchAuth from "../../utils/API/fetchAuth";
import { useFetch } from "../../utils/getData";
import Pokemon from "../../utils/API/fetchPokemon";
import AddPokemon from "../../components/addForm";
import Header from "../../components/header";
import UpdatePokemon from "../../components/updatePokemon/UpdatePokemonForm";
import { IPokemon } from "../../interface";
import Card from "../../components/card/card";

// Fetch Instance
const pokemonApi = new Pokemon();
const AuthApi = new fetchAuth();

export default function Home() {
  const navigate = useNavigate()
  const {
    pokemons,
    pokemonsAbility,
    pokemonsType,
    loading,
    getData,
  } = useFetch();

  const [search, setsearch] = useState<string>('')
  const [pokemon, setPokemon] = useState<IPokemon[]>()
  const [pokeId, setPokeId] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdatePokemon] = useState<boolean>(false);

  useEffect(() => {
    setPokemon(pokemons)
  }, [pokemons])

  const handleChange = (e: any) => {
    let value = e.target.value
    setsearch(value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps


  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/pokemon/${search}`)
  }

  const handleClose = async () => {
    setOpenModal(false);
    setOpenUpdatePokemon(false);
    getData();
  };

  const handleDelete = async (e: any, id: number) => {
    try {
      await pokemonApi.deletePokemon(id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await AuthApi.logOut();
      localStorage.isAuthenticate = false
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddModal = () => {
    setOpenModal(true);
  };

  const handleUpdateModal = () => {
    setOpenUpdatePokemon(true);
  };

  return (
    <>
    <Header
        handleLogOut={handleLogout}
        handleOpenModal={handleAddModal}
      ></Header>
      <div className="home">
        <div className="main-home">
          <form className='form-dash' onSubmit={handleSubmit}>
            <input placeholder="Name" onChange={handleChange} type="text" />
          </form>
          <Card
            pokemon={pokemon}
            handleDelete={handleDelete}
            setPokeId={setPokeId}
            handleUpdateModal={handleUpdateModal}
          ></Card>
        </div>
        {
          <UpdatePokemon
            type={pokemonsType}
            ability={pokemonsAbility}
            pokeId={pokeId}
            open={openUpdateModal}
            onClose={handleClose}
          />
        }

        {
          <AddPokemon
            type={pokemonsType}
            ability={pokemonsAbility}
            pokeId={pokeId}
            open={openModal}
            onClose={handleClose}
          />
        }
      </div>
    </>
  );
}
