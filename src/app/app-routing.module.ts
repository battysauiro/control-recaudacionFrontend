import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { LineaPagosComponent } from './linea-pagos/linea-pagos.component';

const routes: Routes = [
  {path : 'Inicio',component:InicioAdminComponent},
  {path : 'pagos',component:LineaPagosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
