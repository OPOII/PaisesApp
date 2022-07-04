import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  //Termino es la variable que se le asigno al ngModel
  termino: string = '';
  hayError: boolean = false;
  constructor(private paisService: PaisService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (err) => {
        this.hayError = true;
        console.log(err);
      }
    );
  }
}
