import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListCraftsmanComponent } from './card-list-craftsman.component';

describe('CardListCraftsmanComponent', () => {
  let component: CardListCraftsmanComponent;
  let fixture: ComponentFixture<CardListCraftsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListCraftsmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListCraftsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
