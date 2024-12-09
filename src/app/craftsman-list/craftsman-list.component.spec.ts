import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsmanListComponent } from './craftsman-list.component';

describe('CraftsmanListComponent', () => {
  let component: CraftsmanListComponent;
  let fixture: ComponentFixture<CraftsmanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CraftsmanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftsmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
