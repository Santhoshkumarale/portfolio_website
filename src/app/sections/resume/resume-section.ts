import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-resume-section',
  imports: [SectionHeading, Button, Icon, Reveal],
  template: `
    <section id="resume" class="section section--alt" aria-labelledby="resume-title">
      <div class="container">
        <div class="resume" appReveal>
          <div class="resume__content">
            <app-section-heading
              headingId="resume-title"
              [eyebrow]="meta.eyebrow"
              [title]="meta.title"
              [compact]="true"
            />
            <p class="resume__description">{{ resume.description }}</p>
            <div class="resume__actions">
              <app-button [href]="resume.url" [external]="true" icon="file-text">
                {{ resume.viewLabel }}
              </app-button>
              <app-button
                variant="secondary"
                [href]="resume.url"
                [download]="resume.fileName"
                icon="download"
              >
                {{ resume.downloadLabel }}
              </app-button>
            </div>
            <p class="resume__meta">
              <app-icon name="file-text" [size]="14" />
              <span>PDF &middot; {{ resume.fileName }}</span>
            </p>
          </div>

          <div class="document" aria-hidden="true">
            <div class="document__page">
              <span class="document__line document__line--title"></span>
              <span class="document__line document__line--sub"></span>
              <span class="document__gap"></span>
              <span class="document__line"></span>
              <span class="document__line"></span>
              <span class="document__line document__line--short"></span>
              <span class="document__gap"></span>
              <span class="document__line document__line--sub"></span>
              <span class="document__line"></span>
              <span class="document__line document__line--short"></span>
              <span class="document__gap"></span>
              <span class="document__line document__line--sub"></span>
              <span class="document__line"></span>
              <span class="document__line"></span>
            </div>
            <div class="document__page document__page--back"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './resume-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeSection {
  protected readonly meta = portfolioData.sections.resume;
  protected readonly resume = portfolioData.resume;
}
