import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario2',
  templateUrl: './usuario2.component.html',
  styleUrls: ['./usuario2.component.css']
})
export class Usuario2Component implements OnInit {
  @Input() nameUsu;

  constructor() { }

  ngOnInit() {
  }

}
