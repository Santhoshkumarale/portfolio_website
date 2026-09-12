import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureCard } from '../../components/feature-card/feature-card';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeading, FeatureCard, Reveal],
  template: `
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="container">
        <app-section-heading
          headingId="about-title"
          [number]="meta.number"
          [eyebrow]="meta.eyebrow"
          [title]="meta.title"
          [description]="meta.description"
        />

        <div class="about">
          <div class="about__text" appReveal>
            @for (paragraph of about.paragraphs; track $index) {
              <p>{{ paragraph }}</p>
            }
          </div>

          <ul class="about__areas" role="list" aria-label="Focus areas">
            @for (area of about.focusAreas; track area.title; let i = $index) {
              <li appReveal [appRevealDelay]="i * 70">
                <app-feature-card
                  [icon]="area.icon"
                  [title]="area.title"
                  [description]="area.description"
                  [tone]="i % 2 === 0 ? 'accent' : 'sky'"
                />
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    @use 'mixins' as *;

    .about {
      display: grid;
      gap: 2.5rem;
      align-items: start;

      @include up('lg') {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
        gap: 4rem;
      }
    }

    .about__text {
      display: grid;
      gap: 1.15rem;
      font-size: var(--fs-md);
      line-height: var(--lh-relaxed);
      color: var(--text-1);

      p:first-child {
        color: var(--text-0);
      }
    }

    .about__areas {
      display: grid;
      gap: 1rem;

      @include up('sm') {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly meta = portfolioData.sections.about;
  protected readonly about = portfolioData.about;
}
