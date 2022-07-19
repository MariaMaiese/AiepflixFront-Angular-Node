import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevogeneroComponent } from './nuevogenero.component';

describe('NuevogeneroComponent', () => {
  let component: NuevogeneroComponent;
  let fixture: ComponentFixture<NuevogeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevogeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevogeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
