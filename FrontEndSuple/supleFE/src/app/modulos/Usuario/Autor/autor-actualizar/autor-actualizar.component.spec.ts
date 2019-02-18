import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorActualizarComponent } from './autor-actualizar.component';

describe('AutorActualizarComponent', () => {
  let component: AutorActualizarComponent;
  let fixture: ComponentFixture<AutorActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
