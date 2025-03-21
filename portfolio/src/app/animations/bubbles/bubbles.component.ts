import { Component, HostListener, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bubble-effect',
  standalone: true,
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubbleEffectComponent implements OnInit, AfterViewInit {
  bubbliness = 1; // Menge an Bubbles: 1 - 10
  motionResistance = 3; // Bewegungsträgheit: 1 - 10

  private layer!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeBubbles();
  }

  initializeBubbles(): void {

    if (this.layer) {
      this.layer.remove();
    }
    this.layer = this.renderer.createElement('div');
    this.renderer.addClass(this.layer, 'layer');
    this.renderer.appendChild(document.body, this.layer);

    const bubbles = {
      xs: this.bubbliness * 7.5,
      sm: this.bubbliness * 5,
      md: this.bubbliness * 3,
      lg: this.bubbliness * 2
    };

    Object.entries(bubbles).forEach(([size, count]) => {
      this.createBubbles(count, `bubble-${size}`);
    });

    this.motionResistance *= -1; // Umkehren der Richtung für Bewegung
  }

  createBubbles(numberOfBubbles: number, className: string): void {
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = this.renderer.createElement('div');
      this.renderer.addClass(bubble, 'bubble');
      this.renderer.addClass(bubble, className);
      this.renderer.setStyle(bubble, 'top', `${Math.random() * 100}%`);
      this.renderer.setStyle(bubble, 'left', `${Math.random() * 100}%`);
      this.renderer.appendChild(this.layer, bubble);
  
      this.renderer.listen(bubble, 'click', (event) => this.onBubbleClick(event));
      this.renderer.listen(bubble, 'mouseover', (event) => this.onBubbleMouseOver(event));
    }
  }

  // @HostListener('window:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent): void {
  //   if (window.innerWidth > 1024) {
  //     const centerX = window.innerWidth / 2;
  //     const centerY = window.innerHeight / 2;
  //     const layerX = (event.clientX - centerX) / (this.motionResistance / 0.2);
  //     const layerY = (event.clientY - centerY) / (this.motionResistance / 0.2);

  //     this.renderer.setStyle(this.layer, 'left', `${layerX}px`);
  //     this.renderer.setStyle(this.layer, 'top', `${layerY}px`);
  //   }
  // }

  @HostListener('window:resize', [])
  onResize(): void {
    this.initializeBubbles();
  }

  ngAfterViewInit(): void {
    this.attachBubbleEvents();
  }

  private attachBubbleEvents(): void {
    const isMobile = window.innerWidth <= 1024;
    const bubbles = this.el.nativeElement.querySelectorAll('.bubble');

    bubbles.forEach((bubble: HTMLElement) => {
      if (isMobile) {
        this.renderer.listen(bubble, 'click', this.onBubbleClick);
      } else {
        this.renderer.listen(bubble, 'mouseover', this.onBubbleMouseOver);
      }
    });
  }

  private onBubbleMouseOver(event: Event): void {
    const bubble = event.target as HTMLElement;
    if (bubble.classList.contains('bubble-wobble')) {
      bubble.classList.add('bubble-pop');
      setTimeout(() => (bubble.style.display = 'none'), 500);
    } else {
      bubble.classList.add('bubble-wobble');
    }
  }

  private onBubbleClick(event: Event): void {
    const bubble = event.target as HTMLElement;
    bubble.classList.add('bubble-pop');
    setTimeout(() => (bubble.style.display = 'none'), 500);
  }
}
