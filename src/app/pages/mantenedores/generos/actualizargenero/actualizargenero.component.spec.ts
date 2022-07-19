import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizargeneroComponent } from './actualizargenero.component';

describe('ActualizargeneroComponent', () => {
  let component: ActualizargeneroComponent;
  let fixture: ComponentFixture<ActualizargeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizargeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizargeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
