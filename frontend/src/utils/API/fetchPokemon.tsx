import fetchApi from './fetchApi';

export default class Pokemon extends fetchApi {
  async getPokemon() {
    const response = await this.api.get('/pokemon');
    return response.data;
  }

  async getPokemonByName(pokeName: string) {
    const response = await this.api.get(`/pokemon/search/?name=${pokeName}`);
    return response.data;
  }

  async getPokemonById(pokeId: number) {
    const response = await this.api.get(`/pokemon/search/?id=${pokeId}`);
    return response.data;
  }

  async getPokemonAbility() {
    const response = await this.api.get('/pokemon/poke-ability');
    return response.data;
  }

  async getPokemonType() {
    const response = await this.api.get('/pokemon/poke-type');
    return response.data;
  }

  async postPokemon(data: any) {
    const response = await this.api.post('/pokemon', data);
    return response.data;
  }

  async putPokemon(pokeId: number, data: any) {
    const response = await this.api.put(`pokemon/${pokeId}`, data);
    return response.data;
  }

  async deletePokemon(pokeId: number) {
    await this.api.delete(`/pokemon/${pokeId}`);
  }
}
