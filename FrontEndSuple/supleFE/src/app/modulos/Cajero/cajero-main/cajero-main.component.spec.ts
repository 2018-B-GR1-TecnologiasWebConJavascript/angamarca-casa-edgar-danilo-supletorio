import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroMainComponent } from './cajero-main.component';

describe('CajeroMainComponent', () => {
  let component: CajeroMainComponent;
  let fixture: ComponentFixture<CajeroMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajeroMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
