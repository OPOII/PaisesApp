import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  termino: string = '';
  //Con esto, exporto lo que necesito para los otros componentes
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  buscar() {
    this.onEnter.emit(this.termino);
  }
  constructor() {}

  ngOnInit(): void {}
}
