import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionMainComponent } from './facturacion-main.component';

describe('FacturacionMainComponent', () => {
  let component: FacturacionMainComponent;
  let fixture: ComponentFixture<FacturacionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
