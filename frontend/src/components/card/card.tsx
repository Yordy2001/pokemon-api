import './card.css'

type Props = {
    children: any
}

const Card = ({ children }: Props) => {


    const flipCard = (e: any) => {
        e.currentTarget.classList.toggle('card_flip')
    }

    return (

        <div className="card__container">
              {/* {pokemons?.map((pokemon, index) => {
                return ( */}
                  <div className="card-box" 
                    onClick={flipCard}
                  >
                    <div className={`card_display`} >
                      <div className="card__content">
                        {/* <img
                          src={`${process.env.REACT_APP_SERVER_URL}/images/` + pokemon.img}
                          alt={`imagen de ${pokemon.name}`}
                        /> */}
                        <div
                        //   className={`card_body ${pokemon.pokemonAbilityId}`}
                        >
                          <div className="icon-box">
                            <button
                              className="icon delete_card_btn"
                              onClick={() => {
                                // handleDelete(Event, pokemon.id);
                              }}
                            >
                              <img
                                // key={}
                                src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/x-button.png`}
                                alt=""
                              />
                            </button>

                            <button
                              className="icon update_card_btn"
                              onClick={() => {
                                // setPokeId(pokemon.id);
                                // handleUpdateModal();
                              }}
                            >
                              <img
                                src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/pencil.png`}
                                alt=""
                              />
                            </button>
                          </div>
                          {/* <p>{pokemon.name} </p> */}
                        </div>
                      </div>
                      <div className="poke_description">
                        {/* <h1>{pokemon.name}</h1> */}
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perferendis sapiente voluptatibus veniam enim
                          dolore illum assumenda hic ex provident fugit sed,
                          beatae numquam, ab deserunt excepturi saepe asperiores
                          explicabo eligendi?
                        </p>
                        {/* {pokemon.description} */}
                        <div className="foother-card">
                          {/* <p>{pokemon.owner}</p> */}
                          {/* <p>{pokemon.pokemonAbilityId}</p> */}
                          <p>
                            {" "}
                            {/* <img
                              src={`${process.env.REACT_APP_SERVER_URL}/static/image-dev/icons_type/${pokemon.pokemonTypeId}.png`}
                              alt=""
                            /> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* ); */}
              {/* })} */}
            </div>

    )
}

export default Card
