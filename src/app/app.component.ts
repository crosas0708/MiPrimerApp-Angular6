import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Juan', 'Luis', 'Pedro', 'Maria']

  title = 'MiPrimerAppAngular6';
  title2: string = 'MiPrimerApp';

  flgEstado = true;
  flgEstado2: boolean = true;

  edad: number;

  direccion :{
    calle: string;
    ciudad: string
  };
  hobbies: string[];

  constructor() { 
    this.edad = 32;
    this.direccion ={
      calle:'calle los naranjos 54',
      ciudad:'lima'
    }
    this.hobbies=['nadar', 'leer', 'saltar', 'cine', 'billar'];
  }

}
