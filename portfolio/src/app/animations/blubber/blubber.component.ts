import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blubber',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blubber.component.html',
  styleUrl: './blubber.component.scss',
})
export class BlubberComponent implements AfterViewInit {
  private blubberContainer!: HTMLElement;
  private currentBlubberIndex = 0;
  private maxBubbles = 6;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.blubberContainer =
      this.el.nativeElement.querySelector('.blubber-container');
    if (!this.blubberContainer) return;
    this.createBubble();
    this.checkBubbles();
  }

  private setRandomSize(blubber: HTMLElement) {
    const size = Math.random() * (180 - 40) + 60;
    this.renderer.setStyle(blubber, 'width', `${size}px`);
    this.renderer.setStyle(blubber, 'height', `${size}px`);
  }

  private setRandomPosition(blubber: HTMLElement) {
    const containerWidth = this.blubberContainer.offsetWidth;
    const containerHeight = this.blubberContainer.offsetHeight;

    const x = Math.random() * (containerWidth - 220);
    const y = Math.random() * (containerHeight + 4500);
    this.renderer.setStyle(blubber, 'left', `${x}px`);
    this.renderer.setStyle(blubber, 'top', `${y}px`);
  }
  private createBubble() {
    if (this.currentBlubberIndex >= this.maxBubbles) return;

    const blubber = this.renderer.createElement('div');
    this.renderer.addClass(blubber, 'blubber');
    this.setRandomSize(blubber);
    this.setRandomPosition(blubber);

    this.renderer.listen(blubber, 'mouseenter', () =>
      this.burstBubble(blubber)
    );
    this.renderer.appendChild(this.blubberContainer, blubber);
    this.currentBlubberIndex++;

    setTimeout(() => this.createBubble(), 120);
  }

  private burstBubble(blubber: HTMLElement) {
    const width = parseFloat(blubber.style.width);
    const height = parseFloat(blubber.style.height);
    if (this.shouldRemoveBubble(width, height, blubber)) return;
    const { originalX, originalY } = this.getBubblePosition(blubber);
    this.removeBubble(blubber);
    for (let i = 0; i < 2; i++) {
      const newSize = this.calculateNewBubbleSize(width);
      this.createNewBubble(newSize, originalX, originalY);
    }
  }

  private shouldRemoveBubble(
    width: number,
    height: number,
    blubber: HTMLElement
  ): boolean {
    if (width < 60 || height < 60) {
      this.removeBubble(blubber);
      return true;
    }
    return false;
  }

  private removeBubble(blubber: HTMLElement) {
    blubber.classList.add('pop');
    this.renderer.removeChild(this.blubberContainer, blubber);
    this.currentBlubberIndex--;
  }

  private getBubblePosition(blubber: HTMLElement) {
    const rect = blubber.getBoundingClientRect();
    return { originalX: rect.left, originalY: rect.top };
  }

  private calculateNewBubbleSize(currentSize: number): number {
    return currentSize / 2;
  }

  private createNewBubble(
    size: number,
    originalX: number,
    originalY: number
  ): HTMLElement {
    const newBubble = this.renderer.createElement('div');
    this.renderer.addClass(newBubble, 'blubber');

    this.renderer.setStyle(newBubble, 'width', `${size}px`);
    this.renderer.setStyle(newBubble, 'height', `${size}px`);

    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = (Math.random() - 0.5) * 60;

    this.renderer.setStyle(newBubble, 'position', 'absolute');
    this.renderer.setStyle(newBubble, 'left', `${originalX + offsetX}px`);
    this.renderer.setStyle(newBubble, 'top', `${originalY + offsetY}px`);
    this.renderer.setStyle(newBubble, 'opacity', '0');
    this.renderer.setStyle(newBubble, 'transform', 'scale(0.3)');
    this.renderer.setStyle(
      newBubble,
      'transition',
      'transform 0.3s ease-out, opacity 0.3s ease-out'
    );

    this.renderer.appendChild(this.blubberContainer, newBubble);
    this.currentBlubberIndex++;
    this.renderer.listen(newBubble, 'mouseenter', () =>
      this.burstBubble(newBubble)
    );
    setTimeout(() => {
      this.renderer.setStyle(newBubble, 'opacity', '1');
      this.renderer.setStyle(newBubble, 'transform', 'scale(1)');
    }, 70);

    return newBubble;
  }

  private animateBubble(newBubble: HTMLElement) {
    setTimeout(() => {
      this.renderer.setStyle(newBubble, 'transform', 'scale(4.5)');
    }, 1000);
  }

  private checkBubbles() {
    const bubbles = this.blubberContainer.querySelectorAll('.blubber');
    bubbles.forEach((bubble) => {
      const rect = bubble.getBoundingClientRect();
      if (
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.bottom < 0 ||
        rect.top > window.innerHeight
      ) {
        this.renderer.removeChild(this.blubberContainer, bubble);
        this.currentBlubberIndex--;
        this.createBubble();
      }
    });

    setTimeout(() => this.checkBubbles(), 500);
  }
}
