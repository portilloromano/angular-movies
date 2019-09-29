import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByActorComponent } from './movies-by-actor.component';

describe('MoviesByActorComponent', () => {
  let component: MoviesByActorComponent;
  let fixture: ComponentFixture<MoviesByActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesByActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesByActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
