import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = [
    {
      title: 'Optimización de Producción',
      description: 'Aumenta la eficiencia y reduce costos con nuestras soluciones especializadas.',
      imageUrl: 'imagenes/fabrica.png',
      url: '#'
    },
    {
      title: 'Protección de Equipos',
      description: 'Minimiza la corrosión y extiende la vida útil de tus activos críticos.',
      imageUrl: 'imagenes/tuberias.jpg',
      url: '#'
    },
    {
      title: 'Seguridad y Cumplimiento',
      description: 'Cumple con los estándares ambientales sin afectar la rentabilidad.',
      imageUrl: 'imagenes/conductor.jpg',
      url: '#'
    }
  ];
}

