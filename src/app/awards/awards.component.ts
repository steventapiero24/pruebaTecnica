import { Component } from '@angular/core';
import { ItemAwardsComponent } from "../item-awards/item-awards.component";

@Component({
  selector: 'app-awards',
  imports: [ItemAwardsComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {

}
