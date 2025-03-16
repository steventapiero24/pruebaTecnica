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
      title: 'Sed accumsan erat id scelerisque sodales',
      descrption: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.',
    },
    {
      imageUrl: 'imagenes/questionperson.png',
      title: 'Sed accumsan erat id scelerisque sodales',
      descrption: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat..',
    },
    {
      imageUrl: 'imagenes/award-icon.png',
      title: 'Sed accumsan erat id scelerisque sodales',
      descrption: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.',
    },
    {
      imageUrl: 'imagenes/persons.png',
      title: 'Sed accumsan erat id scelerisque sodales',
      descrption: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.',
    },
  ];
}
