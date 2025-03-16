import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsItemComponent } from './about-us-item.component';

describe('AboutUsItemComponent', () => {
  let component: AboutUsItemComponent;
  let fixture: ComponentFixture<AboutUsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
