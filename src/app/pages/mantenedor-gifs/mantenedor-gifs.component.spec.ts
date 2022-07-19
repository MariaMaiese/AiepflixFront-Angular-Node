import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorGifsComponent } from './mantenedor-gifs.component';

describe('MantenedorGifsComponent', () => {
  let component: MantenedorGifsComponent;
  let fixture: ComponentFixture<MantenedorGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
