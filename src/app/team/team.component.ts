import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, MatTabsModule], 
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  selectedTabIndex = 0;

  asyncTabs: Observable<any[]> = of([
    { label: 'Seguridad y bienestar en el trabajo', imageUrl: 'imagenes/trabajadorcampo.jpg', description: 'Nos comprometemos a garantizar un entorno de trabajo seguro y saludable. Implementamos rigurosos protocolos de seguridad, capacitaciones constantes y tecnología avanzada para minimizar riesgos y asegurar el bienestar de cada colaborador en nuestras operaciones.' },
    { label: 'Desarrollo profesional y crecimiento continuo ', imageUrl: 'imagenes/cascotrabajador.jpg', description: 'Fomentamos el crecimiento de nuestro equipo a través de programas de formación, certificaciones y oportunidades de desarrollo profesional. \n\n Creemos en el talento interno y ofrecemos planes de carrera que permiten a nuestros colaboradores alcanzar su máximo potencial.' },
    { label: 'Innovación y sostenibilidad en la industria', imageUrl: 'imagenes/trabajadoresterraza.jpg', description: 'Somos una empresa comprometida con la eficiencia energética y el desarrollo sostenible.  \n\n  Apostamos por tecnologías innovadoras que optimizan nuestros procesos, reducen el impacto ambiental y garantizan un futuro energético más responsable y eficiente.' }
  ]);

  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
  }
}
