import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersEditComponent } from './beers-edit.component';

describe('BeersEditComponent', () => {
  let component: BeersEditComponent;
  let fixture: ComponentFixture<BeersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
