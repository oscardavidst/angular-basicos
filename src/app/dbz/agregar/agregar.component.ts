import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  agregar() {
    // Se valida el campo de nomnbre antes de agregar un personaje
    if (this.nuevo.nombre.trim().length === 0) return;

    // agrega un nuevo personaje por medio del servicio
    this.dbzService.agregarPersonaje(this.nuevo);

    // limpia los campos de agregar personaje
    this.nuevo = { nombre: '', poder: 0 };
  }
}
