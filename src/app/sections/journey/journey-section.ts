import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-journey-section',
  imports: [SectionHeading, Icon, Reveal],
  template: `
    <section id="journey" class="section section--alt" aria-labelledby="journey-title">
      <div class="container">
        <app-section-heading
          headingId="journey-title"
          [eyebrow]="meta.eyebrow"
          [title]="meta.title"
          [description]="meta.description"
          align="center"
        />

        <ol class="journey" role="list">
          @for (step of steps; track step.title; let i = $index) {
            <li class="step" [class.step--right]="i % 2 === 1" appReveal [appRevealDelay]="60">
              <div class="step__node" aria-hidden="true">
                <app-icon [name]="step.icon" [size]="18" />
              </div>
              <div class="step__card">
                <span class="step__index">Stage {{ i + 1 }}</span>
                <h3 class="step__title">{{ step.title }}</h3>
                <p class="step__description">{{ step.description }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styleUrl: './journey-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneySection {
  protected readonly meta = portfolioData.sections.journey;
  protected readonly steps = portfolioData.journey;
}
