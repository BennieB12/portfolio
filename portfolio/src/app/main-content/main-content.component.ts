import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfComponent } from './atf/atf.component';
import { EllipseComponent } from './ellipse/ellipse.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { BubbleEffectComponent } from '../main-content/bubbles/bubbles.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AtfComponent,
    EllipseComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    CommentsComponent,
    ContactComponent,
    BubbleEffectComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements AfterViewInit {
  private blubberContainer!: HTMLElement;
  private currentBlubberIndex = 0;
  private maxBubbles = 12;

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
    const x = Math.random() * (window.innerWidth - 220);
    const y = Math.random() * (window.innerHeight - 120);
    this.renderer.setStyle(blubber, 'left', `${x}px`);
    this.renderer.setStyle(blubber, 'top', `${y}px`);
  }
  private createBubble() {
    if (this.currentBlubberIndex >= this.maxBubbles) return;

    const blubber = this.renderer.createElement('div');
    this.renderer.addClass(blubber, 'blubber');
    this.setRandomSize(blubber);
    this.setRandomPosition(blubber);

    this.renderer.listen(blubber, 'mouseenter', () => this.burstBubble(blubber));    
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
  
  private shouldRemoveBubble(width: number, height: number, blubber: HTMLElement): boolean {
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
  
  private createNewBubble(size: number, originalX: number, originalY: number): HTMLElement {
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
    this.renderer.setStyle(newBubble, 'transition', 'transform 0.3s ease-out, opacity 0.3s ease-out');
  
    this.renderer.appendChild(this.blubberContainer, newBubble);
    this.currentBlubberIndex++;
    this.renderer.listen(newBubble, 'mouseenter', () => this.burstBubble(newBubble));
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

  ellipse = [
    {
      width: '892px',
      height: '892px',
      top: '-79px',
      left: '-199px',
      zIndex: 3,
    // },
    // { width: '206px', height: '206px', top: '90%', left: '700px', zIndex: -1 },
    // { width: '82px', height: '82px', top: '936px', left: '1034px', zIndex: -1 },
    // {
    //   width: '108.75001525878906px',
    //   height: '108.75001525878906px',
    //   top: '2290px',
    //   left: '540px',
    //   zIndex: -1,
    // },
    // {
    //   width: '183px',
    //   height: '183px',
    //   top: '2515px',
    //   left: '1134px',
    //   zIndex: -1,
    // },
    // {
    //   width: '393.32px',
    //   height: '393.32px',
    //   top: '3000px',
    //   left: '1124px',
    //   zIndex: -1,
    // },
    // {
    //   width: '393.3196119958484px',
    //   height: '393.3196119958484px',
    //   top: '2700px',
    //   left: '-194px',
    //   zIndex: -1,
    }
  ];
}
