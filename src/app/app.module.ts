import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LineaPagosComponent } from './linea-pagos/linea-pagos.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { PaginaLegislacionComponent } from './pagina-legislacion/pagina-legislacion.component';
import { PaginaContribucionesComponent } from './pagina-contribuciones/pagina-contribuciones.component';
import { PaginaRMCComponent } from './pagina-rmc/pagina-rmc.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LineaPagosComponent,
    InicioAdminComponent,
    PaginaLegislacionComponent,
    PaginaContribucionesComponent,
    PaginaRMCComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
