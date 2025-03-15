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
      title: 'Lorem ipsum',
      description: 'Hola soy la descripción de la card para que todo se vea lindo',
      imageUrl: 'imagenes/fabrica.png',
      url: '#'
    },
    {
      title: 'Otro título',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.',
      imageUrl: 'imagenes/tuberias.jpg',
      url: '#'
    },
    {
      title: 'Otro título',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.',
      imageUrl: 'imagenes/conductor.jpg',
      url: '#'
    }
  ];
}

