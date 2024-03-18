import {Component, OnInit, OnDestroy} from '@angular/core';
import {LibrosService} from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy{

  libros = [];
  constructor(private librosService: LibrosService){}
  private libroSubscription: Subscription;


  eliminarLibro(libro){

  }

  guardarLibro(f){
    if(f.valid){
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe( () => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();
  }

}
