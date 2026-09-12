import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { IconName } from '../icon/icon-names';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

/**
 * Renders an anchor when `href` is provided, otherwise a native button.
 * Keeps one visual definition for every call-to-action on the site.
 */
@Component({
  selector: 'app-button',
  imports: [Icon, NgTemplateOutlet],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly href = input<string | null>(null);
  readonly external = input(false);
  /** Set to a filename to trigger a download, or `true` to use the server filename. */
  readonly download = input<string | boolean>(false);
  readonly type = input<'button' | 'submit'>('button');
  readonly icon = input<IconName | null>(null);
  readonly iconPosition = input<'start' | 'end'>('start');
  readonly disabled = input(false);
  readonly ariaLabel = input<string | null>(null);

  protected downloadAttr(): string | null {
    const value = this.download();
    if (value === false) return null;
    return value === true ? '' : value;
  }
}
