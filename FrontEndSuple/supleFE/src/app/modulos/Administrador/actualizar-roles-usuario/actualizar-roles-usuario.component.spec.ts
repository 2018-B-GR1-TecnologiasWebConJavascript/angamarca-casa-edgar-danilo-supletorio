import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRolesUsuarioComponent } from './actualizar-roles-usuario.component';

describe('ActualizarRolesUsuarioComponent', () => {
  let component: ActualizarRolesUsuarioComponent;
  let fixture: ComponentFixture<ActualizarRolesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarRolesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarRolesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
