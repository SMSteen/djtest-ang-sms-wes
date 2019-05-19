import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // set up baseURL for pokemon api
  baseURL: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemon() {
    // get data for pokemon 12
    const params: string = `pokemon/12/`;
    // this will return an Observable
    return this.http.get(this.baseURL + params);
  }

  getAbility(abilityId) {
    const params: string = `ability/${abilityId}`;
    // this will return an Observable
    return this.http.get(this.baseURL + '/ability/44/');
  }

  getTasks() {
    return this.http.get('https://5b905f7b3ef10a001445d02e.mockapi.io/');
  }
}
