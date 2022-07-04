import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  //Termino es la variable que se le asigno al ngModel
  termino: string = '';
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  buscar() {
    console.log(this.termino);
  }
}
