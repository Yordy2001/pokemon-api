"Intefaces for each server data"

export interface Pokemon {
    id: number,
    name: string,
    img: any,
    description: string,
    owner: string,
    pokemonAbilityId: number,
    pokemonTypeId: number
}

export interface pokemonAbility{
    id: number,
    ability: string
} 

export interface pokemonType{
    id: number,
    type: string
}

export interface User{
    email: string,
    password: string
}