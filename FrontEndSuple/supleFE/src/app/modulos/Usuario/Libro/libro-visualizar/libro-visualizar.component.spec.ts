import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroVisualizarComponent } from './libro-visualizar.component';

describe('LibroVisualizarComponent', () => {
  let component: LibroVisualizarComponent;
  let fixture: ComponentFixture<LibroVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
