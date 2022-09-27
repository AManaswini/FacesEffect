import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foote2Component } from './foote2.component';

describe('Foote2Component', () => {
  let component: Foote2Component;
  let fixture: ComponentFixture<Foote2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foote2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
