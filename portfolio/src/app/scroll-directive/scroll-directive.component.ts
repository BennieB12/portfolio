// import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

// @Directive({
//   selector: '[appScrollAnimate]'
// })
// export class ScrollAnimateDirective implements OnInit, OnDestroy {
//   private observer: IntersectionObserver;

//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   ngOnInit(): void {
//     this.observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             this.renderer.addClass(this.el.nativeElement, 'visible');
//           } else {
//             this.renderer.removeClass(this.el.nativeElement, 'visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     this.observer.observe(this.el.nativeElement);
//   }

//   ngOnDestroy(): void {
//     if (this.observer) {
//       this.observer.disconnect();
//     }
//   }
// }
