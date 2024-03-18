// Si esta parte no aparece en ANGULAR porque seguro es una version abajo de la 10, etc.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [

  { path: '', component:  InicioComponent},
  { path: 'libros', component: LibroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
