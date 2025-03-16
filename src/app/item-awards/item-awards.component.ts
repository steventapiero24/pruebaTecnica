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
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere blandit quam, himenaeos eros nunc tempus nisi volutpat integer odio vel, dapibus vitae taciti mus metus tincidunt eu vestibulum.',
      url: '#',
    },
    {
      imageUrl: 'imagenes/globo.png',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere blandit quam, himenaeos eros nunc tempus nisi volutpat integer odio vel, dapibus vitae taciti mus metus tincidunt eu vestibulum.',
      url: '#',
    },
  ];
}
