import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

/**
 * Animation for changing font weight between normal and bold.
 */
export const fontWeightAnimation = trigger('fontWeightAnimation', [
  state('normal', style({ fontWeight: 400 })),
  state('bold', style({ fontWeight: 800 })),
  state('medium', style({ fontWeight: 600 })), 
  transition('normal <=> bold', animate('70ms ease-in-out')),
  transition('normal <=> medium', animate('70ms ease-in-out')),  
  transition('medium <=> bold', animate('70ms ease-in-out'))
]);


export const hoverTimeoutAnimation = trigger('hoverTimeoutAnimation', [
  state('normal', style({
    transform: 'translateY(0)',
    fontWeight: 400
  })),
  state('hover', style({
    transform: 'translateY(-20px)',
    fontWeight: 600
  })),
  transition('normal <=> hover', animate('300ms ease-in-out'))
])


/**
 * Animation for scaling an element when hovered.
 */
export const hoverAnimation = trigger('hoverAnimation', [
  state('normal', style({
    transform: 'scale(1)',
    transformOrigin: 'bottom'
  })),
  state('hover', style({
    transform: 'scale(1.1)',
    transformOrigin: 'bottom'
  })),
  transition('normal <=> hover', animate('300ms ease-in-out'))
]);

/**
 * Slide-in animation from the bottom, with scaling effect.
 */
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

/**
 * Slide-in animation from the left.
 */
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

/**
 * Fade-in animation with progressive opacity changes.
 */
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

