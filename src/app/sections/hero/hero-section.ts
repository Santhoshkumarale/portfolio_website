import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Chip } from '../../components/chip/chip';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { portfolioData } from '../../data/portfolioData';

interface HeadlineParts {
  before: string;
  highlight: string;
  after: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [Button, Icon, Chip, Reveal],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  protected readonly personal = portfolioData.personal;
  protected readonly social = portfolioData.social;
  protected readonly resume = portfolioData.resume;
  protected readonly layers = portfolioData.architecture.layers;
  protected readonly safeguards = ['JWT', 'AES-256-GCM', 'Audit logging', 'Data masking'];

  /** Headline split around the highlighted phrase so it can be styled independently. */
  protected readonly headline: HeadlineParts = splitHeadline(
    this.personal.headline,
    this.personal.headlineHighlight,
  );

  /** Specialisation shown after the role, derived from the positioning statement. */
  protected readonly specialisation = this.personal.positioning
    .split('|')
    .slice(1)
    .join('|')
    .trim();
}

function splitHeadline(headline: string, highlight?: string): HeadlineParts {
  if (!highlight) return { before: headline, highlight: '', after: '' };
  const index = headline.indexOf(highlight);
  if (index === -1) return { before: headline, highlight: '', after: '' };
  return {
    before: headline.slice(0, index),
    highlight,
    after: headline.slice(index + highlight.length),
  };
}
