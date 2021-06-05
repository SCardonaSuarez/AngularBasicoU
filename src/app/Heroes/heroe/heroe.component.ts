import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeoreComponent{

    public nombre:string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 30
    }



    obtenerNomber():string{

        return `${this.nombre} - ${this.edad}`
    }

}