import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div
      class="heading"
      [class.heading--center]="align() === 'center'"
      [class.heading--compact]="compact()"
    >
      <p class="eyebrow heading__eyebrow">
        @if (number()) {
          <span class="heading__number" aria-hidden="true">{{ number() }}</span>
        }
        {{ eyebrow() }}
      </p>
      <h2 [id]="headingId()">{{ title() }}</h2>
      @if (description()) {
        <p class="heading__description">{{ description() }}</p>
      }
    </div>
  `,
  styles: `
    .heading {
      display: grid;
      gap: 1rem;
      max-width: 46rem;
      margin-bottom: clamp(2.5rem, 5vw, 4rem);
    }
    .heading--center {
      margin-inline: auto;
      text-align: center;
      justify-items: center;
    }
    .heading--compact {
      margin-bottom: 1rem;
    }
    .heading__eyebrow::before {
      display: none;
    }
    .heading__number {
      display: inline-grid;
      place-items: center;
      min-width: 2rem;
      height: 1.5rem;
      padding-inline: 0.45rem;
      border-radius: var(--radius-xs);
      border: 1px solid var(--accent-border);
      background: var(--accent-soft);
      font-weight: 600;
      letter-spacing: 0.06em;
      color: var(--accent-strong);
    }
    .heading__description {
      font-size: var(--fs-md);
      line-height: var(--lh-relaxed);
      color: var(--text-2);
      max-width: 42rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly headingId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string | undefined>(undefined);
  readonly number = input<string | undefined>(undefined);
  readonly align = input<'start' | 'center'>('start');
  readonly compact = input(false);
}
