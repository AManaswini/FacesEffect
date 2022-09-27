import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectPage1Component } from './redirect-page1.component';

describe('RedirectPage1Component', () => {
  let component: RedirectPage1Component;
  let fixture: ComponentFixture<RedirectPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
