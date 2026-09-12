import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tone } from '../../data/portfolio.models';
import { Chip } from '../chip/chip';
import { Icon } from '../icon/icon';
import { IconName } from '../icon/icon-names';

/**
 * Glass card with an icon, title, description and optional tags.
 * Used for focus areas, architecture concepts, security controls,
 * backend capabilities and database practices.
 */
@Component({
  selector: 'app-feature-card',
  imports: [Icon, Chip],
  template: `
    <article class="card" [attr.data-tone]="tone()">
      <div class="card__icon" aria-hidden="true">
        <app-icon [name]="icon()" [size]="22" />
      </div>
      <h3 class="card__title">{{ title() }}</h3>
      <p class="card__description">{{ description() }}</p>
      @if (tags().length) {
        <ul class="card__tags" role="list" [attr.aria-label]="title() + ' technologies'">
          @for (tag of tags(); track tag) {
            <li>
              <app-chip>{{ tag }}</app-chip>
            </li>
          }
        </ul>
      }
    </article>
  `,
  styleUrl: './feature-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCard {
  readonly icon = input.required<IconName>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly tags = input<string[]>([]);
  readonly tone = input<Tone>('neutral');
}
