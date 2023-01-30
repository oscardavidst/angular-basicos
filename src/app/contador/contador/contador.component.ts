import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="contar(base)">+ {{ base }}</button>
    <span>{{ contador }}</span>
    <button (click)="contar(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  contador: number = 10;
  base: number = 5;

  contar(cantidad: number) {
    this.contador += cantidad;
  }
}
