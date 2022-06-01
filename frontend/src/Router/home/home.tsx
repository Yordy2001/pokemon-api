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
    setPokemons
  } = useFetch();

  const initialState = pokemons

  const [search, setsearch] = useState<string>('')
  const [pokemon, setPokemon] = useState<IPokemon[]>()
  const [pokeId, setPokeId] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdatePokemon] = useState<boolean>(false);

  useEffect(() => {
    setPokemon(initialState)
  }, [initialState])

  const handleChange = (e: any) => {
    let value = e.target.value
    setsearch(value)

  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPokemon = async () => {
    let data = await pokemonApi.getPokemonByName(search)
    setPokemon([data])
    console.log(pokemon)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getPokemon()
  }

  const handleClose = async () => {
    setOpenModal(false);
    setOpenUpdatePokemon(false);
    getData();
  };

  // const handleDelete = async (e: any, id: number) => {
  //   try {
  //     await pokemonApi.deletePokemon(id);
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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

  // const handleUpdateModal = () => {
  //   setOpenUpdatePokemon(true);
  // };

  return (
    <>
      <div>
        <Header
          handleLogOut={handleLogout}
          handleOpenModal={handleAddModal}
        ></Header>
        {loading ? (
          <h1>LOADING...</h1>
        ) : (
          <main className="main__home">
            <form className='form-dash' onSubmit={handleSubmit}>
              <input placeholder="Name" onChange={handleChange} type="text" />
            </form>
            <div className="card__container">
              {pokemon?.map((pokemon, index) => {
                return (
                  <>
                    <div className="card" key={index}>
                      <div className="animation">
                       
                      </div>

                      <div className={`image ${pokemon.pokemon_type.type}`} >
                        <img
                          src={`${process.env.REACT_APP_SERVER_URL}/images/` + pokemon.img}
                          alt={`imagen de ${pokemon.name}`}
                        />
                      </div>
                      <div className='card_body'>
                        <p>{pokemon.name.toUpperCase()} </p>
                        <footer>
                          <h5>Type:</h5>
                          <img
                            className="icon-type"
                            src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${pokemon.pokemon_type.type}.png`}
                            alt=""
                          />
                        </footer>
                      </div>
                    </div>

                  </>

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

{/* <footer>
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
                      </footer> */}