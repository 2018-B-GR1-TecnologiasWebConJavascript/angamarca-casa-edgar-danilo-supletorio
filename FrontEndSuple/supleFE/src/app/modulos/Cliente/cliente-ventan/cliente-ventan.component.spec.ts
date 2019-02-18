import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVentanComponent } from './cliente-ventan.component';

describe('ClienteVentanComponent', () => {
  let component: ClienteVentanComponent;
  let fixture: ComponentFixture<ClienteVentanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteVentanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVentanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
