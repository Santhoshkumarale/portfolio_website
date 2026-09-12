import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Chip } from '../../components/chip/chip';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { portfolioData } from '../../data/portfolioData';

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
}
