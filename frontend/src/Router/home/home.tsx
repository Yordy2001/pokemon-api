import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/style/main.css";
import "./home.css";

import fetchAuth from "../../utils/API/fetchAuth";
import { useFetch } from "../../utils/getData";
import Pokemon from "../../utils/API/fetchPokemon";
import AddPokemon from "../../components/addForm";
import Header from "../../components/header";
import Hero from "../../components/hero/hero";
import UpdatePokemon from "../../components/updatePokemon/UpdatePokemonForm";

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
    getData
  } = useFetch();

  const [pokeId, setPokeId] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdatePokemon] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      await AuthApi.logOut();
      localStorage.isAuthenticate = false
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e: any, id: number) => {
    try {
      await pokemonApi.deletePokemon(id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = async () => {
    setOpenModal(false);
    setOpenUpdatePokemon(false);
    getData();
  };

  const handleAddModal = () => {
    setOpenModal(true);
  };

  const handleUpdateModal = () => {
    setOpenUpdatePokemon(true);
  };

  return (
    <>
      <div>
        <Header
          handleLogOut={handleLogout}
          handleOpenModal={handleAddModal}
        ></Header>

        <Hero></Hero>
        {loading ? (
          <h1>LOADING...</h1>
        ) : (
          <main className="main__home">
            <div className="card__container">
              {pokemons?.map((pokemon, index) => {
                return (
                   
                      <div className="card" key={index}>
                        <div className="image">
                          <img
                            src={`${process.env.REACT_APP_SERVER_URL}/images/` + pokemon.img}
                            alt={`imagen de ${pokemon.name}`}
                          />
                        </div>
                        <div className='card_body'>
                          <footer>
                            <button
                              className="icon delete_card_btn"
                              onClick={() => {
                                handleDelete(Event, pokemon.id);
                              }}
                            >
                              <img
                                key={pokemon.id}
                                src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/x-button.png`}
                                alt=""
                              />
                            </button>

                            <button
                              className="icon update_card_btn"
                              onClick={() => {
                                setPokeId(pokemon.id);
                                handleUpdateModal();
                              }}
                            >
                              <img
                                src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/pencil.png`}
                                alt=""
                              />
                            </button>
                          </footer>
                          <p>{pokemon.name} </p>
                        </div>
                      </div>
                );
              })}
            </div>
          </main>
        )}

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
