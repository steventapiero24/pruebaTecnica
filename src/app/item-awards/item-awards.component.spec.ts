import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAwardsComponent } from './item-awards.component';

describe('ItemAwardsComponent', () => {
  let component: ItemAwardsComponent;
  let fixture: ComponentFixture<ItemAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
