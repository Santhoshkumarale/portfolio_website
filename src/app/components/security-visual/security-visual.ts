import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SecurityVisualKind } from '../../data/portfolio.models';
import { Icon } from '../icon/icon';

/**
 * Small, purely CSS-drawn illustrations that make each security control
 * understandable at a glance. All sample values are deliberately fictitious.
 */
@Component({
  selector: 'app-security-visual',
  imports: [Icon],
  templateUrl: './security-visual.html',
  styleUrl: './security-visual.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityVisual {
  readonly kind = input.required<SecurityVisualKind>();
}
