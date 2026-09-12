import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

const DESKTOP_QUERY = '(min-width: 1024px)';

@Component({
  selector: 'app-site-header',
  imports: [Icon, Button],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeader {
  protected readonly personal = portfolioData.personal;
  protected readonly nav = portfolioData.nav;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly activeId = signal<string | null>(null);

  private readonly toggleButton = viewChild<ElementRef<HTMLButtonElement>>('toggleButton');
  private readonly mobilePanel = viewChild<ElementRef<HTMLElement>>('mobilePanel');

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.observeScroll();
      this.observeSections();
      this.observeViewport();
    });
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  protected openMenu(): void {
    this.menuOpen.set(true);
    this.document.body.style.overflow = 'hidden';
    queueMicrotask(() => {
      const panel = this.mobilePanel()?.nativeElement;
      if (!panel) return;
      panel.querySelector<HTMLElement>('a')?.focus();
      // Any link inside the panel (nav items or the CTA) closes it after navigation.
      panel.addEventListener(
        'click',
        (event) => {
          if ((event.target as HTMLElement).closest('a')) this.closeMenu(false);
        },
        { once: false },
      );
    });
  }

  protected closeMenu(returnFocus = true): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.document.body.style.overflow = '';
    if (returnFocus) {
      this.toggleButton()?.nativeElement.focus();
    }
  }

  private observeScroll(): void {
    const update = () => this.scrolled.set(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', update));
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const targets = this.nav
      .map((item) => this.document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        // Prefer the visible section that appears first in nav order.
        const next = this.nav.find((item) => visible.has(item.id))?.id ?? null;
        if (next) this.activeId.set(next);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.1, 0.25] },
    );

    targets.forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private observeViewport(): void {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) this.closeMenu(false);
    };
    media.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => media.removeEventListener('change', onChange));
  }
}
