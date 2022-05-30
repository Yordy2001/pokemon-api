
export interface IpokemonAbility{
    id: number,
    ability: string
} 

export interface IpokemonType{
    id: number,
    type: string
}

export interface IPokemon {
    id: number,
    name: string,
    img: any,
    description: string,
    owner: string,
    pokemonAbilityId: number,
    pokemonTypeId: number
    pokemon_ability: IpokemonAbility,
    pokemon_type: IpokemonType,
}
export interface IUser{
    firstName:string,
    email: string,
    password: string
}
