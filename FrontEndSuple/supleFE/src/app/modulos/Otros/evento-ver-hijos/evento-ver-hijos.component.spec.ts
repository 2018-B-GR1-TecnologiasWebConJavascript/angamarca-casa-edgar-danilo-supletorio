import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoVerHijosComponent } from './evento-ver-hijos.component';

describe('EventoVerHijosComponent', () => {
  let component: EventoVerHijosComponent;
  let fixture: ComponentFixture<EventoVerHijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoVerHijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoVerHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
