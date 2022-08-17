/* eslint-disable react-hooks/exhaustive-deps */
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
  const [pokemonFilter, setpokemonFilter] = useState<IPokemon[]>  ([])
  const { pokeId } = useParams();
  const [like, setlike] = useState(false)


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPokemon = async () => {
    try {
      let data = await pokemonApi.getPokemonByName(pokeId?pokeId:'');
      let pokemonFilter = await pokemonApi.getPokemonFilter()
      
      setpokemonFilter([pokemonFilter])
      setPokemon([data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
    // console.log(pokemonFilter[0]?.pokemon_type.type);
    
  }, [pokeId]);

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

      <div className={styles.recomeded}>
        {
          pokemonFilter?.map((data, key)=>{
            return <>  <div className={styles.pokemonRecomeded}>
              <div className='img'>
                <img src={`${process.env.REACT_APP_SERVER_URL}/images/` + data.img} alt="" />
              </div>
              <div className={styles.cardRecomendedBody}>
                  <p>{data.name}</p>
                  <h5>Type:</h5>
                  {/* <img
                    className="icon-type"
                    src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${data?.pokemon_type.type}.png`}
                    alt=""
                  /> */}
              </div>
            </div>
            </>
          })
        }
      </div>
    </div>
  );
};

export default PokeProfile;
