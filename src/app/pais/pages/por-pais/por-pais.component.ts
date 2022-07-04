import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
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
  paises: Country[] = [];
  byCountry = 'Buscar país...';
  constructor(private paisService: PaisService) {}
  ngOnInit(): void {}
  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        console.log(err);
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
  }
}
