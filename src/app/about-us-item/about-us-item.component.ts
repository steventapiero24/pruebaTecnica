import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-about-us-item',
  imports: [CommonModule, NgFor, MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-us-item.component.html',
  styleUrls: ['./about-us-item.component.css'],
})
export class AboutUsItemComponent {
  public aboutItem = [
    {
      imageUrl: 'imagenes/arrows.png',
      title: ' Inhibidores de Corrosión y Depósitos',
      descrption: 'Protegemos tus equipos y ductos para evitar daños y optimizar su rendimiento.',
    },
    {
      imageUrl: 'imagenes/questionperson.png',
      title: 'Tratamiento de Crudo y Agua de Producción ',
      descrption: 'Soluciones avanzadas para separar y tratar fluidos de manera eficiente.',
    },
    {
      imageUrl: 'imagenes/award-icon.png',
      title: 'Optimización de Fluidos de Perforación ',
      descrption: 'Mejoramos la estabilidad y rendimiento de tus fluidos de perforación.',
    },
    {
      imageUrl: 'imagenes/persons.png',
      title: ' Asesoría Técnica y Monitoreo',
      descrption: 'Evaluamos tu operación y aplicamos estrategias personalizadas para maximizar la producción.',
    },
  ];
}
