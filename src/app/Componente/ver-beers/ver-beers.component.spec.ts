import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBeersComponent } from './ver-beers.component';

describe('VerBeersComponent', () => {
  let component: VerBeersComponent;
  let fixture: ComponentFixture<VerBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
