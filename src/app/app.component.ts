import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Juan', 'Luis', 'Pedro', 'Maria']
  title = 'MiPrimerAppAngular6';
  flgEstado = true;
}
