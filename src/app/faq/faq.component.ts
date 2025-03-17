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
      title: '¿Lorem ipsum dolor sit amet consectetur adipiscing?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis, curabitur facilisis vulputate taciti nunc nam. Netus cras pellentesque urna eu aenean sem mattis felis, sodales libero in molestie massa sapien est magnis habitant, himenaeos mauris imperdiet et laoreet tempus conubia.',
    },
    {
      title: '¿Elit posuere blandit quam himenaeos eros nunc?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis, curabitur facilisis vulputate taciti nunc nam. Netus cras pellentesque urna eu aenean sem mattis felis, sodales libero in molestie massa sapien est magnis habitant, himenaeos mauris imperdiet et laoreet tempus conubia.',
    },
    {
      title: '¿Tempus nisi volutpat integer odio vel?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis, curabitur facilisis vulputate taciti nunc nam. Netus cras pellentesque urna eu aenean sem mattis felis, sodales libero in molestie massa sapien est magnis habitant, himenaeos mauris imperdiet et laoreet tempus conubia.',
    },
    {
      title: '¿Dapibus vitae taciti mus metus tincidunt eu vestibulum?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis, curabitur facilisis vulputate taciti nunc nam. Netus cras pellentesque urna eu aenean sem mattis felis, sodales libero in molestie massa sapien est magnis habitant, himenaeos mauris imperdiet et laoreet tempus conubia.',
    },
    {
      title: '¿Maecenas pharetra purus id lacus bibendum sollicitudin?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis, curabitur facilisis vulputate taciti nunc nam. Netus cras pellentesque urna eu aenean sem mattis felis, sodales libero in molestie massa sapien est magnis habitant, himenaeos mauris imperdiet et laoreet tempus conubia.',
    },
  ];
}
