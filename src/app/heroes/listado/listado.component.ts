import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})

export class ListadoComponent {

  heroes:string[]=['seiya','goku','naruto','spiderman'];
  heroeBorrado: string = '';

  borrarHeroe(){
   this.heroeBorrado= this.heroes.shift() || ' ';
   
  }

}

