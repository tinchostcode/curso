import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 

import { heroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
 


@NgModule({
  declarations: [ //componentes
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    contadorModule,
   DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
