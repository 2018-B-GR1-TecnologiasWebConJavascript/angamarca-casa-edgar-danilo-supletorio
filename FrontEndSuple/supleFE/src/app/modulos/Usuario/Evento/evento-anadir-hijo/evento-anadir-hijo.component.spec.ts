import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAnadirHijoComponent } from './evento-anadir-hijo.component';

describe('EventoAnadirHijoComponent', () => {
  let component: EventoAnadirHijoComponent;
  let fixture: ComponentFixture<EventoAnadirHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoAnadirHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoAnadirHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
