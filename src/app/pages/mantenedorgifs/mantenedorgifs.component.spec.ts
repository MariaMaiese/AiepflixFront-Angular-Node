import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorgifsComponent } from './mantenedorgifs.component';

describe('MantenedorgifsComponent', () => {
  let component: MantenedorgifsComponent;
  let fixture: ComponentFixture<MantenedorgifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorgifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorgifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
