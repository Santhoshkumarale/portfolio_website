import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { FeatureCard } from '../../components/feature-card/feature-card';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

@Component({
  selector: 'app-database-section',
  imports: [SectionHeading, FeatureCard, CodeBlock, Icon, Reveal],
  templateUrl: './database-section.html',
  styleUrl: './database-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseSection {
  protected readonly meta = portfolioData.sections.database;
  protected readonly database = portfolioData.database;

  protected isEncrypted(entity: { encrypted?: string[] }, column: string): boolean {
    return entity.encrypted?.includes(column) ?? false;
  }
}
