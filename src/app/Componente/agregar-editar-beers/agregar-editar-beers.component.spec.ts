import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarBeersComponent } from './agregar-editar-beers.component';

describe('AgregarEditarBeersComponent', () => {
  let component: AgregarEditarBeersComponent;
  let fixture: ComponentFixture<AgregarEditarBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarBeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
