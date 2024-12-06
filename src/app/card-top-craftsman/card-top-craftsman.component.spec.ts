import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopCraftsmanComponent } from './card-top-craftsman.component';

describe('CardTopCraftsmanComponent', () => {
  let component: CardTopCraftsmanComponent;
  let fixture: ComponentFixture<CardTopCraftsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTopCraftsmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTopCraftsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
