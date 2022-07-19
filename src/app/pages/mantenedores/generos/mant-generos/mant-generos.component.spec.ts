import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantGenerosComponent } from './mant-generos.component';

describe('MantGenerosComponent', () => {
  let component: MantGenerosComponent;
  let fixture: ComponentFixture<MantGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
