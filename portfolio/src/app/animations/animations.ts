import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';


export const shrinkAndCircle = trigger('shrinkAndCircle', [
  transition('start => end', animate('1.5s ease-out', keyframes([
    style({ width: '100vw', height: '100vh', borderRadius: '0', top: '0', left: '0', zIndex: '10000', offset: 0 }),
    style({ width: '1500px', height: '1500px', borderRadius: '100px', top: '-30px', left: '-100px', offset: 0.25 }),
    style({ width: '1200px', height: '1200px', borderRadius: '250px', top: '-50px', left: '-150px', offset: 0.5 }),
    style({ width: '1000px', height: '1000px', borderRadius: '400px', top: '-70px', left: '-180px', offset: 0.75 }),
    style({ width: '892px', height: '892px', borderRadius: '50%', top: '-79px', left: '-199px', offset: 1 }),
  ])))
]);

export const hoverAnimation = trigger('hoverAnimation', [
  state('normal', style({
    transform: 'scale(1)',
  })),
  state('hover', style({
    transform: 'scale(1.2)',
  })),
  transition('normal <=> hover', animate('300ms ease-in-out')),
]);

export const slideInFromBottom = trigger('slideInFromBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(50px) scale(0.5)',
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  })),
  transition('hidden <=> visible', animate('400ms ease-out'))
]);

export const slideInLeft = trigger('slideInLeft', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-160px)',
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)',
  })),
  transition('hidden <=> visible', animate('400ms ease-out'))
]);

export const slideInRight = trigger('slideInRight', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(160px)',
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)',
  })),
  transition('hidden <=> visible', animate('400ms ease-out'))
]);

export const fadeIn = trigger('fadeIn', [
  state('hidden', style({ opacity: 0 })),
  state('visible', style({ opacity: 1 })),

  transition('hidden => visible', animate('800ms ease-out', keyframes([
    style({ opacity: 0, offset: 0 }),
    style({ opacity: 0.2, offset: 0.3 }),
    style({ opacity: 0.5, offset: 0.6 }),
    style({ opacity: 0.8, offset: 0.85 }),
    style({ opacity: 1, offset: 1 }),
  ])))
]);
