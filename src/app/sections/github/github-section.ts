import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  computed,
  signal,
} from '@angular/core';
import { Button } from '../../components/button/button';
import { Chip } from '../../components/chip/chip';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';
import { isPlaceholder } from '../../utils/placeholders';

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

type RepoState =
  | { status: 'unconfigured' }
  | { status: 'loading' }
  | { status: 'loaded'; repos: GithubRepo[] }
  | { status: 'error' };

const GITHUB_API = 'https://api.github.com';

/**
 * Shows the GitHub profile link and, when a real username is configured,
 * loads that account's most recently updated public repositories live from
 * the GitHub API. Nothing is fabricated when the username is a placeholder.
 */
@Component({
  selector: 'app-github-section',
  imports: [SectionHeading, Button, Chip, Icon, Reveal],
  templateUrl: './github-section.html',
  styleUrl: './github-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubSection {
  protected readonly meta = portfolioData.sections.github;
  protected readonly github = portfolioData.github;
  protected readonly username = portfolioData.personal.githubUsername;
  protected readonly profileUrl = `https://github.com/${this.username}`;
  protected readonly configured = !isPlaceholder(this.username);

  protected readonly state = signal<RepoState>(
    this.configured ? { status: 'loading' } : { status: 'unconfigured' },
  );
  protected readonly repos = computed(() => {
    const state = this.state();
    return state.status === 'loaded' ? state.repos : [];
  });

  constructor() {
    afterNextRender(() => {
      if (this.configured) void this.loadRepositories();
    });
  }

  private async loadRepositories(): Promise<void> {
    try {
      const response = await fetch(
        `${GITHUB_API}/users/${encodeURIComponent(this.username)}/repos?sort=updated&per_page=6&type=owner`,
        { headers: { Accept: 'application/vnd.github+json' } },
      );
      if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);

      const repos = ((await response.json()) as GithubRepo[]).filter((repo) => !repo.fork);
      this.state.set({ status: 'loaded', repos });
    } catch {
      this.state.set({ status: 'error' });
    }
  }
}
