import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureCard } from '../../components/feature-card/feature-card';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-architecture-section',
  imports: [SectionHeading, FeatureCard, Icon, Reveal],
  templateUrl: './architecture-section.html',
  styleUrl: './architecture-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchitectureSection {
  protected readonly meta = portfolioData.sections.architecture;
  protected readonly architecture = portfolioData.architecture;
}
