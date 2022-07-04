import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private searchCountryService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.searchCountryService.getCountryByCode(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
    /*this.activatedRoute.params.subscribe(({ id }) => {
      this.searchCountryService.getCountryByCode(id).subscribe((pais) => {
        console.log(pais);
      });
    });
    */
  }
}
