// Este es el corazon del project ANGULAR.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import {LibrosComponent} from './libros/libros.component';
import {LibroComponent} from './libro/libro.component';
import {LibrosService} from './services/libros.service';
import {InicioComponent} from './inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent, // para usar esta class libros.component
    LibroComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

