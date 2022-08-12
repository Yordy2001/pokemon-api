import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../../assets/style/main.css';
import styles from './profile.module.css';
import { IPokemon } from '../../interface';
import Pokemon from '../../utils/API/fetchPokemon';

type Props = {};

const pokemonApi = new Pokemon();
const PokeProfile = (_props: Props) => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  let { pokeId } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPokemon = async () => {
    if (pokeId) {
      try {
        let data = await pokemonApi.getPokemonByName(pokeId);
        // let data = await pokemonApi.getPokemonById(parseInt(pokeId))
        setPokemon([data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getPokemon();
  }, [pokeId, getPokemon]);

  return (

    <div className={styles.page_description}>

      {pokemon?.map((elem: any) => {
        return (
          <div className={styles.poke_desc} key={elem.id}>
            <div className={styles.img}>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/images/` + elem?.img}
                alt={`imagen del pokemon ${elem?.name} `}
              />
            </div>

            <div className={styles.info}>
              <p>{elem?.description}</p>
              <div className={styles.footer}>
                <img
                  className={styles.iconType}
                  src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${elem.pokemon_type.type}.png`}
                  alt=""
                />
                <img
                  className={styles.iconType}
                  src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${elem.pokemon_type.type}.png`}
                  alt=""
                />
                <img
                  className={styles.iconType}
                  src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${elem.pokemon_type.type}.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokeProfile;
