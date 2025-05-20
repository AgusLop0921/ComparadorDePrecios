import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent {
  @Input() texto: string = '';
  @Input() image: string = '';
  @Input() ruta: string = '';

  constructor(private router: Router) {}

  navegar() {
    if (this.ruta) {
      this.router.navigate([this.ruta]);
    }
  }
}