import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolioData';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-site-footer',
  imports: [Icon],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly personal = portfolioData.personal;
  protected readonly nav = portfolioData.nav;
  protected readonly social = portfolioData.social;
  protected readonly year = new Date().getFullYear();
}
