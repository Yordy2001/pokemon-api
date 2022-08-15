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
  const { pokeId } = useParams();
  const [like, setlike] = useState(false)


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

  const handleLike = () => {
    setlike(!like)
  }

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
              <h2>{elem?.name}</h2>
              <p>{elem?.description}</p>
              <div className={styles.footer}>

                <div className="type-des">
                  <h5>Type:</h5>
                  <img
                    className="icon-type"
                    src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${elem?.pokemon_type.type}.png`}
                    alt=""
                  />
                </div>

                {/* <div className={`${styles.heart} ${like ? styles.heartLiked : ''}`} onClick={handleLike}>
                </div> */}
                <div className={styles.iconsDelete}>
                  <button
                    className="icon delete_card_btn"
                  >
                    <img
                      key={elem?.id}
                      src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/x-button.png`}
                      alt=""
                    />
                  </button>

                  <button
                    className="icon update_card_btn"
                  >
                    <img
                      src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/pencil.png`}
                      alt=""
                    />
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokeProfile;
