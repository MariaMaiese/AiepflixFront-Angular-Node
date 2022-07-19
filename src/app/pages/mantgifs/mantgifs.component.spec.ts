import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantgifsComponent } from './mantgifs.component';

describe('MantgifsComponent', () => {
  let component: MantgifsComponent;
  let fixture: ComponentFixture<MantgifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantgifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantgifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
