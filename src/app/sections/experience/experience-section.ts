import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Chip } from '../../components/chip/chip';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-experience-section',
  imports: [SectionHeading, Chip, Icon, Reveal],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  protected readonly meta = portfolioData.sections.experience;
  protected readonly entries = portfolioData.experience;
}
