import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorVisualizarComponent } from './autor-visualizar.component';

describe('AutorVisualizarComponent', () => {
  let component: AutorVisualizarComponent;
  let fixture: ComponentFixture<AutorVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
