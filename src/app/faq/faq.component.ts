import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  readonly panelOpenState = signal(false);

  faq = [
    {
      title: '¿Qué servicios ofrece la empresa?',
      description:
        'Nuestra empresa brinda servicios de exploración, extracción, refinación y distribución de petróleo y gas. Además, ofrecemos consultoría en energía, soluciones sostenibles y logística para el sector petrolero.',
    },
    {
      title: ' ¿Cómo puedo solicitar una cotización o contratar un servicio?',
      description:
        'Puedes solicitar una cotización a través de nuestro formulario en la sección de "Contacto" en nuestra página web o llamando a nuestro equipo de atención al cliente.',
    },
    {
      title: '¿Dónde opera la empresa?',
      description:
        'Tenemos presencia en diversas regiones estratégicas, con operaciones en campos petroleros, refinerías y plantas de distribución en varios países.',
    },
    {
      title: '¿Qué medidas toman para proteger el medio ambiente?',
      description:
        'Aplicamos estrictos estándares de sostenibilidad, implementamos tecnologías de reducción de emisiones y promovemos prácticas de producción responsable para minimizar nuestro impacto ambiental.',
    },
    {
      title: '¿Cuáles son los requisitos para trabajar en la empresa?',
      description:
        'Los requisitos varían según el puesto. Buscamos profesionales con experiencia en la industria, así como jóvenes talentos interesados en desarrollarse en el sector. Puedes consultar las vacantes en la sección "Trabaja con Nosotros".',
    },
  ];
}
