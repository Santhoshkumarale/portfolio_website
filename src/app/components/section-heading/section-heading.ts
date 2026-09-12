import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div
      class="heading"
      [class.heading--center]="align() === 'center'"
      [class.heading--compact]="compact()"
    >
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h2 [id]="headingId()">{{ title() }}</h2>
      @if (description()) {
        <p class="heading__description">{{ description() }}</p>
      }
    </div>
  `,
  styles: `
    .heading {
      display: grid;
      gap: 0.85rem;
      max-width: 46rem;
      margin-bottom: clamp(2.25rem, 5vw, 3.5rem);
    }
    .heading--center {
      margin-inline: auto;
      text-align: center;
      justify-items: center;
    }
    .heading--compact {
      margin-bottom: 1rem;
    }
    .heading__description {
      font-size: var(--fs-md);
      line-height: var(--lh-relaxed);
      color: var(--text-2);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly headingId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string | undefined>(undefined);
  readonly align = input<'start' | 'center'>('start');
  readonly compact = input(false);
}
