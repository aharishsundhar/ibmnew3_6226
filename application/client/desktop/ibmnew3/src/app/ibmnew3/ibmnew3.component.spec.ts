import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ibmnew3Component } from './ibmnew3.component';

describe('Ibmnew3Component', () => {
  let component: Ibmnew3Component;
  let fixture: ComponentFixture<Ibmnew3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ibmnew3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ibmnew3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});