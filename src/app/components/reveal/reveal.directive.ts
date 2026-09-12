import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Adds `is-visible` once the host scrolls into view. Pairs with the global
 * `.reveal` styles; hidden state only applies when JS is running and the
 * visitor has not requested reduced motion.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'delay()',
  },
})
export class Reveal {
  /** Stagger delay in milliseconds. */
  readonly delay = input(0, { alias: 'appRevealDelay' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const element = this.host.nativeElement;

      if (typeof IntersectionObserver === 'undefined') {
        element.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              element.classList.add('is-visible');
              observer.disconnect();
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );

      observer.observe(element);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
