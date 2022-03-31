"Intefaces for each server data"

export interface IPokemon {
    id: number,
    name: string,
    img: any,
    description: string,
    owner: string,
    pokemonAbilityId: number,
    pokemonTypeId: number
}

export interface IpokemonAbility{
    id: number,
    ability: string
} 

export interface IpokemonType{
    id: number,
    type: string
}

export interface IUser{
    email: string,
    password: string
}