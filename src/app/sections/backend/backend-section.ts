import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { FeatureCard } from '../../components/feature-card/feature-card';
import { FlowDiagram } from '../../components/flow-diagram/flow-diagram';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-backend-section',
  imports: [SectionHeading, FeatureCard, FlowDiagram, CodeBlock, Icon, Reveal],
  templateUrl: './backend-section.html',
  styleUrl: './backend-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendSection {
  protected readonly meta = portfolioData.sections.backend;
  protected readonly backend = portfolioData.backend;
}
