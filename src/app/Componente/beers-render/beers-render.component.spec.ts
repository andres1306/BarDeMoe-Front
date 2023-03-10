import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersRenderComponent } from './beers-render.component';

describe('BeersRenderComponent', () => {
  let component: BeersRenderComponent;
  let fixture: ComponentFixture<BeersRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
