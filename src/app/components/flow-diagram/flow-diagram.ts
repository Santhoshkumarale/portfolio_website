import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FlowStep } from '../../data/portfolio.models';
import { Icon } from '../icon/icon';

/**
 * Ordered chain of steps joined by arrows.
 * `vertical` stacks always; `responsive` flows horizontally on large screens.
 */
@Component({
  selector: 'app-flow-diagram',
  imports: [Icon],
  template: `
    <ol
      class="flow"
      [class.flow--responsive]="orientation() === 'responsive'"
      [class.flow--compact]="compact()"
      [attr.aria-label]="label()"
    >
      @for (step of steps(); track step.label; let last = $last; let i = $index) {
        <li class="flow__step" [attr.data-tone]="step.tone ?? 'neutral'" [style.--i]="i">
          <div class="flow__node">
            @if (step.icon) {
              <span class="flow__icon" aria-hidden="true">
                <app-icon [name]="step.icon" [size]="18" />
              </span>
            }
            <div class="flow__text">
              <span class="flow__label">{{ step.label }}</span>
              @if (step.detail) {
                <span class="flow__detail">{{ step.detail }}</span>
              }
            </div>
          </div>
          @if (!last) {
            <span class="flow__arrow" aria-hidden="true">
              <app-icon name="arrow-down" [size]="16" />
            </span>
          }
        </li>
      }
    </ol>
  `,
  styleUrl: './flow-diagram.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowDiagram {
  readonly steps = input.required<FlowStep[]>();
  readonly label = input.required<string>();
  readonly orientation = input<'vertical' | 'responsive'>('vertical');
  readonly compact = input(false);
}
