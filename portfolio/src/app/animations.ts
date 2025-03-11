import { trigger, state, style, transition, animate } from '@angular/animations';

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
  transition('hidden <=> visible', animate('400ms ease-out'))
]);
