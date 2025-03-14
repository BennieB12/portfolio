import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfComponent } from './atf/atf.component';
import { EllipseComponent } from './ellipse/ellipse.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
 
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
    this.blubberContainer = this.el.nativeElement.querySelector('.blubber-container');
    if (!this.blubberContainer) return;
    this.createBubble();
    this.createBubble();
    this.createBubble();
  }

  private createBubble() {
    if (this.currentBlubberIndex >= this.maxBubbles) return;

    const blubber = this.renderer.createElement('div');
    this.renderer.addClass(blubber, 'blubber');
    this.setRandomSize(blubber);
    this.setRandomPosition(blubber);

    this.renderer.listen(blubber, 'click', () => this.burstBubble(blubber));

    this.renderer.appendChild(this.blubberContainer, blubber);
    this.currentBlubberIndex++;

    setTimeout(() => this.createBubble(), 1000);
  }

  private setRandomSize(blubber: HTMLElement) {
    const size = Math.random() * (180 - 80) + 60;
    this.renderer.setStyle(blubber, 'width', `${size}px`);
    this.renderer.setStyle(blubber, 'height', `${size}px`);
  }

  private setRandomPosition(blubber: HTMLElement) {
    const x = Math.random() * (window.innerWidth - 120); 
    const y = Math.random() * (window.innerHeight - 120);

    this.renderer.setStyle(blubber, 'left', `${x}px`);
    this.renderer.setStyle(blubber, 'top', `${y}px`);
  }

  private burstBubble(blubber: HTMLElement) {
    this.renderer.setStyle(blubber, 'animation', 'burstBubble 0.5s forwards');
    setTimeout(() => {
      this.renderer.removeChild(this.blubberContainer, blubber);
      this.createBubble();
      this.createBubble();
      this.createBubble();
    }, 200);
  }



  
  ellipse = [
    {
      width: '892px',
      height: '892px',
      top: '-79px',
      left: '-199px',
      zIndex: 3,
    },
    { width: '206px', height: '206px', top: '90%', left: '700px', zIndex: -1 },
    { width: '82px', height: '82px', top: '936px', left: '1034px', zIndex: -1 },
    { width: '108.75001525878906px', height: '108.75001525878906px', top: '2290px', left: '540px',zIndex: -1 },
    { width: '183px', height: '183px', top: '2515px', left: '1134px', zIndex: -1 },
    { width: '393.32px', height: '393.32px', top: '3000px', left: '1124px', zIndex: -1 },
    { width: '393.3196119958484px', height: '393.3196119958484px', top: '2700px', left: '-194px', zIndex: -1 },
  ];
}
