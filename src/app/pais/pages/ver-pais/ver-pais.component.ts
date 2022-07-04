import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private searchCountryService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.searchCountryService.getCountryByCode(id))
      )
      .subscribe((resp) => {
        console.log(resp);
      });
    /*this.activatedRoute.params.subscribe(({ id }) => {
      this.searchCountryService.getCountryByCode(id).subscribe((pais) => {
        console.log(pais);
      });
    });
    */
  }
}
