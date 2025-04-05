import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A component that creates animated bubbles that burst and generate new smaller bubbles.
 */
@Component({
  selector: 'app-blubber',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blubber.component.html',
  styleUrl: './blubber.component.scss',
})
export class BlubberComponent implements AfterViewInit {
  private blubberContainer!: HTMLElement; // The container element for the bubbles
  private currentBlubberIndex = 0; // Keeps track of the number of current bubbles
  private maxBubbles = 6; // Maximum number of bubbles that can exist at once

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  /**
   * Called after the component's view has been initialized.
   * Finds the blubber container and starts the bubble creation process.
   */
  ngAfterViewInit(): void {
    this.blubberContainer =
      this.el.nativeElement.querySelector('.blubber-container');
    if (!this.blubberContainer) return;
    this.createBubble();
    this.checkBubbles();
  }

  /**
   * Sets a random size for the bubble element.
   *
   * @param blubber - The bubble element to set the size for.
   */
  private setRandomSize(blubber: HTMLElement) {
    const size = Math.random() * (180 - 40) + 60;
    this.renderer.setStyle(blubber, 'width', `${size}px`);
    this.renderer.setStyle(blubber, 'height', `${size}px`);
  }

  /**
   * Sets a random position for the bubble element within the container.
   *
   * @param blubber - The bubble element to position.
   */
  private setRandomPosition(blubber: HTMLElement) {
    const containerWidth = this.blubberContainer.offsetWidth;
    const containerHeight = this.blubberContainer.offsetHeight;

    const x = Math.random() * (containerWidth - 220);
    let y: number;

    if (window.innerWidth <= 768) {
      y = Math.random() * (containerHeight + 6000);
    } else if (window.innerWidth <= 1040) {
      y = Math.random() * (containerHeight + 5000);
    } else {
      y = Math.random() * (containerHeight + 4500);
    }

    this.renderer.setStyle(blubber, 'left', `${x}px`);
    this.renderer.setStyle(blubber, 'top', `${y}px`);
  }

  /**
   * Creates a new bubble and appends it to the container.
   * The bubble will burst when mouse enters it.
   */
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

  /**
   * Handles the bursting of a bubble when mouse enters it.
   * It will remove the bubble and create two new smaller bubbles.
   *
   * @param blubber - The bubble element to burst.
   */
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

  /**
   * Checks if the bubble should be removed based on its size.
   *
   * @param width - The width of the bubble.
   * @param height - The height of the bubble.
   * @param blubber - The bubble element to check.
   * @returns True if the bubble should be removed, otherwise false.
   */
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

  /**
   * Removes the bubble element from the container and decrements the current blubber index.
   *
   * @param blubber - The bubble element to remove.
   */
  private removeBubble(blubber: HTMLElement) {
    blubber.classList.add('pop');
    this.renderer.removeChild(this.blubberContainer, blubber);
    this.currentBlubberIndex--;
  }

  /**
   * Gets the position of the bubble element.
   *
   * @param blubber - The bubble element to get the position of.
   * @returns The position of the bubble (x, y coordinates).
   */
  private getBubblePosition(blubber: HTMLElement) {
    const rect = blubber.getBoundingClientRect();
    return { originalX: rect.left, originalY: rect.top };
  }

  /**
   * Calculates the new size of a bubble after it bursts.
   *
   * @param currentSize - The current size of the bubble.
   * @returns The new size of the bubble.
   */
  private calculateNewBubbleSize(currentSize: number): number {
    return currentSize / 2;
  }

  /**
   * Creates a new smaller bubble after the original one bursts.
   * Delegates the creation, styling, event registration, and animation steps.
   *
   * @param size - The size of the new bubble.
   * @param originalX - The x-coordinate of the original bubble's position.
   * @param originalY - The y-coordinate of the original bubble's position.
   * @returns The newly created and animated bubble element.
   */
  private createNewBubble(
    size: number,
    originalX: number,
    originalY: number
  ): HTMLElement {
    const newBubble = this.initializeBubbleElement(size);
    this.setInitialBubbleStyles(newBubble, originalX, originalY);
    this.registerBubbleEvents(newBubble);
    this.animateBubbleIn(newBubble);

    return newBubble;
  }

  /**
   * Initializes a new bubble DOM element and sets its size.
   *
   * @param size - The width and height of the bubble.
   * @returns A newly created DOM element with basic size and class.
   */
  private initializeBubbleElement(size: number): HTMLElement {
    const bubble = this.renderer.createElement('div');
    this.renderer.addClass(bubble, 'blubber');
    this.renderer.setStyle(bubble, 'width', `${size}px`);
    this.renderer.setStyle(bubble, 'height', `${size}px`);
    return bubble;
  }

  /**
   * Sets the initial styles and position for the bubble element,
   * and appends it to the container.
   *
   * @param bubble - The bubble DOM element.
   * @param originalX - The x-coordinate of the original bubble's position.
   * @param originalY - The y-coordinate of the original bubble's position.
   */
  private setInitialBubbleStyles(
    bubble: HTMLElement,
    originalX: number,
    originalY: number
  ): void {
    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = (Math.random() - 0.5) * 60;

    this.renderer.setStyle(bubble, 'position', 'absolute');
    this.renderer.setStyle(bubble, 'left', `${originalX + offsetX}px`);
    this.renderer.setStyle(bubble, 'top', `${originalY + offsetY}px`);
    this.renderer.setStyle(bubble, 'opacity', '0');
    this.renderer.setStyle(bubble, 'transform', 'scale(0.3)');
    this.renderer.setStyle(
      bubble,
      'transition',
      'transform 0.3s ease-out, opacity 0.3s ease-out'
    );

    this.renderer.appendChild(this.blubberContainer, bubble);
    this.currentBlubberIndex++;
  }

  /**
   * Registers interaction events for the bubble element,
   * such as the bursting behavior on mouse enter.
   *
   * @param bubble - The bubble DOM element.
   */
  private registerBubbleEvents(bubble: HTMLElement): void {
    this.renderer.listen(bubble, 'mouseenter', () => this.burstBubble(bubble));
  }

  /**
   * Animates the bubble into view with opacity and scale transition.
   *
   * @param bubble - The bubble DOM element to animate.
   */
  private animateBubbleIn(bubble: HTMLElement): void {
    setTimeout(() => {
      this.renderer.setStyle(bubble, 'opacity', '1');
      this.renderer.setStyle(bubble, 'transform', 'scale(1)');
    }, 70);
  }

  /**
   * Checks if any bubbles have moved out of the container and removes them if necessary.
   * Creates a new bubble when one is removed.
   */
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
