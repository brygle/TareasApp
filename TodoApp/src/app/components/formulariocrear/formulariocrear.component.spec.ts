import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocrearComponent } from './formulariocrear.component';

describe('FormulariocrearComponent', () => {
  let component: FormulariocrearComponent;
  let fixture: ComponentFixture<FormulariocrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariocrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
