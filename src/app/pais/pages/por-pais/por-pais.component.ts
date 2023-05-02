import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent implements OnInit {
  //Termino es la variable que se le asigno al ngModel
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  public isLoading: boolean = false;
  paisesSugeridos: Country[] = [];
  byCountry = 'Buscar país...';
  mostrarSugerencias: boolean = false;
  constructor(private paisService: PaisService) {}
  ngOnInit(): void {}
  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;
    this.isLoading = true;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
        this.isLoading = false;
      },
      (err) => {
        this.hayError = true;
        console.log(err);
        this.isLoading = false;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
