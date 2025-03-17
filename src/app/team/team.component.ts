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
    { label: 'Mauris vulputate ', imageUrl: 'imagenes/trabajadorcampo.jpg', description: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat. \n\n Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.' },
    { label: 'lorem sed lacus ', imageUrl: 'imagenes/cascotrabajador.jpg', description: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat. \n\n Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.' },
    { label: 'lacus efficitur', imageUrl: 'imagenes/trabajadoresterraza.jpg', description: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat. \n\n Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.' }
  ]);

  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
  }
}
