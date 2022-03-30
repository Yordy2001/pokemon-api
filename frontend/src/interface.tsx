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
    ability: Text
} 

export interface pokemonType{
    id: number,
    type: Text
}

export interface User{
    email: Text,
    password: Text
}