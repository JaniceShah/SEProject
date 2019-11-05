import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmanComponent } from './stockman.component';

describe('StockmanComponent', () => {
  let component: StockmanComponent;
  let fixture: ComponentFixture<StockmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
