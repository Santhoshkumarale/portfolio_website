import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Hidden SVG sprite holding every icon as a `<symbol>`. Rendered once at the
 * root so each `<app-icon>` is a single `<use>` reference instead of a full
 * copy of the path data.
 */
@Component({
  selector: 'app-icon-sprite',
  templateUrl: './icon-sprite.html',
  styles: `
    :host {
      display: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSprite {}
