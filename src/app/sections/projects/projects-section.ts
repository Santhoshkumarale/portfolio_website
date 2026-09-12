import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { FlowDiagram } from '../../components/flow-diagram/flow-diagram';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-projects-section',
  imports: [SectionHeading, Chip, Icon, FlowDiagram, Reveal],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  protected readonly meta = portfolioData.sections.projects;
  protected readonly projects = portfolioData.projects;
}
