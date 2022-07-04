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
  constructor(private paisService: PaisService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  buscar() {
    this.paisService.buscarPais(this.termino).subscribe((respuesta) => {
      console.log(respuesta);
    });
  }
}
