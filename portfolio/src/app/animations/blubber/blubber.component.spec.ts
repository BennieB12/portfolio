import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlubberComponent } from './blubber.component';

describe('BlubberComponent', () => {
  let component: BlubberComponent;
  let fixture: ComponentFixture<BlubberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlubberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlubberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
