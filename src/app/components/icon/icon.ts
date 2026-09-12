import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from './icon-names';

/**
 * Inline SVG icon set (stroke-based, 24×24 grid).
 * Decorative by default; pass `label` to expose an accessible name.
 */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--icon-size.px]': 'size()',
  },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly label = input<string | null>(null);
}
