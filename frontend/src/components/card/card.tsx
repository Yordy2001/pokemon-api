import React, { useState, useEffect, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import './card.css';

type Props = {
  pokemon: any;
  handleDelete: any;
  setPokeId: any;
  handleUpdateModal: () => void;
};

const Card = ({
  pokemon,
  handleDelete,
  setPokeId,
  handleUpdateModal,
}: Props) => {
  const navigate = useNavigate();

  const handleNaviagte = (name: any) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="card-component">
      <div className="card-content">
        {pokemon?.map((pokemon: any) => {
          return (
            <div
              className="card-front"
              key={pokemon.id}
              onClick={() => {
                handleNaviagte(pokemon.name);
              }}
            >
              <div className={`image ${pokemon.pokemon_type.type}`}>
                <img
                  src={
                    `${process.env.REACT_APP_SERVER_URL}/images/` + pokemon.img
                  }
                  alt={`imagen de ${pokemon.name}`}
                />
              </div>
              <div className="card-body">
                <p>{pokemon.name.toUpperCase()} </p>
                <footer className="card-footer">
                  <div className="type-des">
                    <h5>Type:</h5>
                    <img
                      className="icon-type"
                      src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${pokemon.pokemon_type.type}.png`}
                      alt=""
                    />
                  </div>
                  <div className="dlt-upt-icons">
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
                  </div>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
