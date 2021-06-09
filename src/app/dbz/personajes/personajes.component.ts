import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz,interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {


  // @Input()personajes: Personaje[] = []

  get personajes():Personaje[]{ //Aqui llamamos el spret Op. del arreglo
    return this.dbzServces.personajes;
  }

  constructor(private dbzServces: DbzService){
    
  }

}