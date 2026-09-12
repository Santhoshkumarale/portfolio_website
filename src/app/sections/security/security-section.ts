import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureCard } from '../../components/feature-card/feature-card';
import { FlowDiagram } from '../../components/flow-diagram/flow-diagram';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { SecurityVisual } from '../../components/security-visual/security-visual';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-security-section',
  imports: [SectionHeading, FeatureCard, FlowDiagram, Icon, Reveal, SecurityVisual],
  templateUrl: './security-section.html',
  styleUrl: './security-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecuritySection {
  protected readonly meta = portfolioData.sections.security;
  protected readonly security = portfolioData.security;
}
