import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado: string = ''

  borrarHeroe(){
    console.log('Borrando....');
    // this.heores.pop()

    this.heroeBorrado = this.heroes.shift() || ''
    
    
  }

}
