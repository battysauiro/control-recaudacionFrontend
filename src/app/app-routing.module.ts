import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { LineaPagosComponent } from './linea-pagos/linea-pagos.component';
import { PaginaContribucionesComponent } from './pagina-contribuciones/pagina-contribuciones.component';
import { PaginaLegislacionComponent } from './pagina-legislacion/pagina-legislacion.component';
import { PaginaRMCComponent } from './pagina-rmc/pagina-rmc.component';

const routes: Routes = [
  {path : 'Inicio',component:InicioAdminComponent},
  {path : 'pagos',component:LineaPagosComponent},
  {path : 'legislacion',component:PaginaLegislacionComponent},
  {path : 'contribuciones',component:PaginaContribucionesComponent},
  {path : 'registroContribuyentes',component:PaginaRMCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
