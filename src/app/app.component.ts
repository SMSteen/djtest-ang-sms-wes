import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  pokemon = {}; // create a variable for our pokemon data; since data will be an object, we'll inialize to empty

  constructor(private pokeService: PokemonService) {
    // this runs when the component is created
    // ideally, doesn't do any work outside of setting up dependency injection
  }

  // things happening here are event-driven (component is initialized, a button is clicked, a form is submitted...)
  // ngOnInit() {
  //   // get our pokemon data
  //   this.pokeService.getPokemon().subscribe(data => {
  //     console.log('data returned', data);
  //     // save our pokemon data
  //     this.pokemon = data;
  //   });

  //   this.pokeService.getTasks().subscribe(tasks => {
  //     console.log('tasks returned', tasks);
  //   });
  // }
}
