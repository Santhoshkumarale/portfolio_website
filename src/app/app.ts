import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { AboutSection } from './sections/about/about-section';
import { ArchitectureSection } from './sections/architecture/architecture-section';
import { BackendSection } from './sections/backend/backend-section';
import { ContactSection } from './sections/contact/contact-section';
import { DatabaseSection } from './sections/database/database-section';
import { ExperienceSection } from './sections/experience/experience-section';
import { GithubSection } from './sections/github/github-section';
import { HeroSection } from './sections/hero/hero-section';
import { JourneySection } from './sections/journey/journey-section';
import { ProjectsSection } from './sections/projects/projects-section';
import { ResumeSection } from './sections/resume/resume-section';
import { SecuritySection } from './sections/security/security-section';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    SiteFooter,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ArchitectureSection,
    SecuritySection,
    BackendSection,
    DatabaseSection,
    JourneySection,
    GithubSection,
    ResumeSection,
    ContactSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
