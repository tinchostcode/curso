import { NgModule } from "@angular/core"; //1
import { ContadorComponent } from "./contador/contador.component";

@NgModule({ //3
    declarations:[
        ContadorComponent
    ],

    exports:[ //4
        ContadorComponent
    ]
    
})

export class contadorModule{ //2

}