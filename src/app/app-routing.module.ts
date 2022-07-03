import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    //Path es para la localizacion de la ruta
    path: '',
    //Componente para mostrar, debe de estar importado en el app module y exportado
    //su respectivo modulo
    component: PorPaisComponent,
    //Para solo direccionar a esa parte
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    //El dos puntos es para hacerlo dinamico en las rutas por su codigo
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    //**  es cuando se va a otra ruta que no esta creada entonces se va para el home/
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    //Router module define las rutas, forRoot es para las principaes mientras que
    //forChield es para las hijas
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
