import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBeersComponent } from './listar-beers.component';

describe('ListarBeersComponent', () => {
  let component: ListarBeersComponent;
  let fixture: ComponentFixture<ListarBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
