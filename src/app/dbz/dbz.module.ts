import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component'; // *1
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
 MainPageComponent,
 PersonajesComponent
  ],

  imports: [
    CommonModule,
    FormsModule //Para el manejo de formulario- ngsubmit // *1
  ],
  exports:[
    MainPageComponent,
    PersonajesComponent
  ],

  providers:[ //son los servicios , que se instancian 1 vez. clase abs
    DbzService
  ]
  

})
export class DbzModule { 
 
  

}



