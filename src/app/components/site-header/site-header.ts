import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  afterRenderEffect,
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
    '(click)': 'onHostClick($event)',
  },
})
export class SiteHeader {
  protected readonly personal = portfolioData.personal;
  protected readonly nav = portfolioData.nav;

  protected readonly scrolled = signal(false);
  /** 0–1 fraction of the document scrolled, drives the header progress bar. */
  protected readonly progress = signal(0);
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

    // Runs after the panel has actually been rendered (zoneless-safe), so the
    // first link can receive focus for keyboard users.
    afterRenderEffect(() => {
      const panel = this.mobilePanel()?.nativeElement;
      if (panel && this.menuOpen()) {
        panel.querySelector<HTMLElement>('a')?.focus();
      }
    });
  }

  /** Any link inside the mobile panel (nav items or the CTA) closes it after navigation. */
  protected onHostClick(event: MouseEvent): void {
    if (!this.menuOpen()) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('a') && target.closest('#mobile-nav')) {
      this.closeMenu(false);
    }
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
    const root = this.document.documentElement;
    const update = () => {
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      this.scrolled.set(y > 8);
      this.progress.set(max > 0 ? Math.min(1, y / max) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    });
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
        this.activeId.set(this.nav.find((item) => visible.has(item.id))?.id ?? null);
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
