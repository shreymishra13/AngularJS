import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectives } from './ng-if-directives';

describe('NgIfDirectives', () => {
  let component: NgIfDirectives;
  let fixture: ComponentFixture<NgIfDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
