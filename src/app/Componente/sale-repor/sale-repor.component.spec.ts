import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReporComponent } from './sale-repor.component';

describe('SaleReporComponent', () => {
  let component: SaleReporComponent;
  let fixture: ComponentFixture<SaleReporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleReporComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleReporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
