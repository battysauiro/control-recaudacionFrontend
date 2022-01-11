import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { LineaPagosComponent } from './linea-pagos/linea-pagos.component';
import { PaginaLegislacionComponent } from './pagina-legislacion/pagina-legislacion.component';

const routes: Routes = [
  {path : 'Inicio',component:InicioAdminComponent},
  {path : 'pagos',component:LineaPagosComponent},
  {path : 'legislacion',component:PaginaLegislacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
