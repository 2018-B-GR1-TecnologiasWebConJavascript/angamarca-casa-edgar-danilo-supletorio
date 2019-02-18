import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajerofacturasComponent } from './cajerofacturas.component';

describe('CajerofacturasComponent', () => {
  let component: CajerofacturasComponent;
  let fixture: ComponentFixture<CajerofacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajerofacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajerofacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
