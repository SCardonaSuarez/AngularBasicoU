import {Injectable} from '@angular/core';
import { Personaje } from '../interfaces/dbz,interfaces';


@Injectable()   
export class DbzService {

  private _personajes: Personaje[]= [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder:10000
    }
  ]

  get personajes():Personaje[]{ //Aca se crea un spret Op. de personajes como buena practica
    return [...this._personajes]
  }


  constructor(){
      
  }

  agregarPersonaje(personaje: Personaje){ //data o argumento  enves de personaje

    this._personajes.push(personaje)
  }
}