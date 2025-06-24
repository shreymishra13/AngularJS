import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseDisplay } from './if-else-display';

describe('IfElseDisplay', () => {
  let component: IfElseDisplay;
  let fixture: ComponentFixture<IfElseDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
