import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEffectComponent } from './bubbles.component';

describe('BubblesComponent', () => {
  let component: BubbleEffectComponent;
  let fixture: ComponentFixture<BubbleEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
