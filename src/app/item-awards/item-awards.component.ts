import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-awards',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './item-awards.component.html',
  styleUrl: './item-awards.component.css',
})
export class ItemAwardsComponent {
  awards = [
    {
      imageUrl: 'imagenes/academic.png',
      title: 'Capacitación Profesional',
      description:
        'Mejora tus habilidades con nuestros cursos especializados y actualízate con las últimas tendencias del sector.',
      url: '#',
    },
    {
      imageUrl: 'imagenes/globo.png',
      title: 'Soluciones Innovadoras',
      description:
        'Descubre herramientas y estrategias que impulsan la transformación digital y optimizan procesos empresariales.',
      url: '#',
    },
  ];
}
