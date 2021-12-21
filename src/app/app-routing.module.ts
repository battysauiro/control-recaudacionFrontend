import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaPagosComponent } from './linea-pagos/linea-pagos.component';

const routes: Routes = [
  {path : 'linea-pagos',component:LineaPagosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
