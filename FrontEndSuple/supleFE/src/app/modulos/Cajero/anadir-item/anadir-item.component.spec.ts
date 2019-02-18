import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirItemComponent } from './anadir-item.component';

describe('AnadirItemComponent', () => {
  let component: AnadirItemComponent;
  let fixture: ComponentFixture<AnadirItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
