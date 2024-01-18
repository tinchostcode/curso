import { NgModule } from "@angular/core";
import { Heroecomponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({       //@decorador - 
    declarations:[ // Aca se declara va todo lo que contiene el module pipes,componentes, etc
        Heroecomponent,
        ListadoComponent
    ],
    exports:[ // aca agregamos lo que va a ser visible fuera del modulo
        
        ListadoComponent
    ],
    imports:[
        CommonModule // directivas de angular ngIf , NgFor, Pipes....
    ]
})

export class heroesModule{

}