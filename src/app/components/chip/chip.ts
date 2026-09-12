import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tone } from '../../data/portfolio.models';

@Component({
  selector: 'app-chip',
  template: `<span class="chip" [attr.data-tone]="tone()"><ng-content /></span>`,
  styles: `
    :host {
      display: inline-flex;
      max-width: 100%;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.3rem 0.65rem;
      border-radius: var(--radius-pill);
      border: 1px solid var(--border);
      background: var(--surface);
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 1.2;
      color: var(--text-1);
      white-space: nowrap;
    }
    .chip[data-tone='accent'] {
      color: var(--accent-strong);
      background: var(--accent-soft);
      border-color: var(--accent-border);
    }
    .chip[data-tone='sky'] {
      color: var(--sky);
      background: var(--sky-soft);
      border-color: rgba(92, 200, 255, 0.3);
    }
    .chip[data-tone='emerald'] {
      color: var(--emerald);
      background: var(--emerald-soft);
      border-color: rgba(74, 222, 128, 0.3);
    }
    .chip[data-tone='amber'] {
      color: var(--amber);
      background: var(--amber-soft);
      border-color: rgba(251, 191, 119, 0.3);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chip {
  readonly tone = input<Tone>('neutral');
}
