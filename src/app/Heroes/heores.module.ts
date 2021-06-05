import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import { HeoreComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeoreComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports: [ // Aca van todos los modulos 
        CommonModule
    ]
})
export class HeroesModule{

}