import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryToClickMe } from './try-to-click-me';

describe('TryToClickMe', () => {
  let component: TryToClickMe;
  let fixture: ComponentFixture<TryToClickMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryToClickMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryToClickMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
