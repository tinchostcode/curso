import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})


export class MainPageComponent {


personajes:Personaje[]=[
  {
    nombre:'goku',
    poder:10000    
  },
  {
    nombre:'Vegeta',
    poder:5000
  }

]
  
  nuevo:Personaje={
    nombre:'',
    poder:0
  }
  
  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;}
      console.log(this.nuevo);
      
      this.personajes.push(this.nuevo);
      this.nuevo={
        nombre:'',
        poder:0
      }
  }

   

}
