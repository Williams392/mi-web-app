import {Component} from '@angular/core'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent{

  libros = ['Matematica 1', 'Algoritmos Basico', 'Algebra nivel basico'];

  eliminarLibro(libro){
    this.libros = this.libros.filter( p => p !== libro);
  }

}
