import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Hulk',
    'Supergirl',
    'Flash',
    'Thor',
    'BlackPanter',
  ];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }

  agregarHeroe(nombre: string) {
    this.heroes.push(nombre);
  }
}
