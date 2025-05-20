import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

interface Categoria {
  texto: string;
  image: string;
  ruta: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categorias: Categoria[] = [
    { texto: 'Lácteos', image: 'assets/images/lacteos.png', ruta: '/productos?cat=lacteos' },
    { texto: 'Bebidas', image: 'assets/images/bebidas.png', ruta: '/productos?cat=bebidas' },
    { texto: 'Carnes', image: 'assets/images/carnes.png', ruta: '/productos?cat=carnes' },
    { texto: 'Frutas y Verduras', image: 'assets/images/frutasverduras.png', ruta: '/productos?cat=frutasverduras' },
    { texto: 'Panadería', image: 'assets/images/panaderia.png', ruta: '/productos?cat=panaderia' },
    { texto: 'Limpieza', image: 'assets/images/limpieza.png', ruta: '/productos?cat=limpieza' },
    { texto: 'Congelados', image: 'assets/images/congelados.png', ruta: '/productos?cat=congelados' },
    { texto: 'Fiambres', image: 'assets/images/fiambres.png', ruta: '/productos?cat=fiambres' },
    { texto: 'Snacks', image: 'assets/images/snacks.png', ruta: '/productos?cat=snacks' },
    { texto: 'Despensa', image: 'assets/images/despensa.png', ruta: '/productos?cat=despensa' },
    { texto: 'Cuidado personal', image: 'assets/images/cuidado.png', ruta: '/productos?cat=cuidado' },
    { texto: 'Mascotas', image: 'assets/images/mascotas.png', ruta: '/productos?cat=mascotas' }
  ];
}
