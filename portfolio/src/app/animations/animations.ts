import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';


export const shrinkAndCircle = trigger('shrinkAndCircle', [
  transition('start => end', animate('1000ms ease-out', keyframes([
    style({ width: '100vw', height: '100vh', borderRadius: '0', top: '0', left: '0', zIndex: '10000', offset: 0 }),
    style({ width: '85vw', height: '85vw', borderRadius: '10%', top: '-30px', left: '-100px', offset: 0.25 }),
    style({ width: '70vw', height: '70vw', borderRadius: '25%', top: '-50px', left: '-150px', offset: 0.5 }),
    style({ width: '65vw', height: '65vw', borderRadius: '27%', top: '-55px', left: '-155px', offset: 0.55 }),
    style({ width: '60vw', height: '60vw', borderRadius: '30%', top: '-60px', left: '-160px', offset: 0.6 }),
    style({ width: '57vw', height: '57vw', borderRadius: '35%', top: '-65px', left: '-165px', offset: 0.65 }),
    style({ width: '55vw', height: '55vw', borderRadius: '40%', top: '-70px', left: '-180px', offset: 0.75 }),
    style({ width: '52vw', height: '52vw', borderRadius: '42%', top: '-72px', left: '-185px', offset: 0.8 }),
    style({ width: '50vw', height: '50vw', borderRadius: '45%', top: '-75px', left: '-190px', offset: 0.85 }),
    style({ width: '47vw', height: '47vw', borderRadius: '48%', top: '-78px', left: '-195px', offset: 0.95 }),
    style({ width: '46vw', height: '46vw', borderRadius: '49%', top: '-78px', left: '-197px', offset: 0.98 }), 
    style({ width: '45vw', height: '45vw', borderRadius: '50%', top: '-79px', left: '-199px', offset: 1 }),
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
    visibility: 'hidden'
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
