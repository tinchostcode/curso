import { Component } from "@angular/core";  


@Component({
    selector:'app-contador',
    template: ` 
<h1>Contador</h1>
 
 <!-- evento (click)-->

 <!--button class="btn btn-success" (click)="sumar()"> Sumar + </button-->
 <button class="btn btn-success" (click)="acumular(1)" >+1 </button>
 
 <span> {{numero}} </span>
 
 
 <button class="btn btn-danger" (click)="acumular(-1)"> -1 </button>
 <!--button class="btn btn-danger" (click)="restar()"> Restar - </button-->

<br>
<br>
 <button class="btn btn-success" (click)="acumular(base)" >+ 5 </button>
 
 <span> {{numero}} </span>
 
 
 <button class="btn btn-danger" (click)="acumular(-base)"> -5 </button>

`
})
export class ContadorComponent{
    title :string= 'Contador APP';
  
    numero: number = 10; //propiedad
    base  : number =  5;
    //metodos
    sumar(){
      this.numero++  //this hago referencia a la propiedad de la clase
  
    }
    restar(){
      this.numero--
      
    }
  
    acumular(valor:number){
      this.numero+=valor;
      
  
    }
}