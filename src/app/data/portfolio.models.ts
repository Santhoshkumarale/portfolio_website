import { IconName } from '../components/icon/icon-names';

export type Tone = 'neutral' | 'accent' | 'sky' | 'emerald' | 'amber';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: IconName;
  /** Human-readable handle shown next to the icon (never a URL). */
  handle: string;
}

export interface PersonalInfo {
  /** Placeholder until replaced — rendered as-is. */
  name: string;
  /** Short role label, e.g. "Software Engineer". */
  role: string;
  /** Positioning statement used in the header brand and metadata. */
  positioning: string;
  headline: string;
  supportingText: string;
  location: string;
  email: string;
  githubUsername: string;
  linkedinUsername: string;
}

export type SectionId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'architecture'
  | 'security'
  | 'backend'
  | 'database'
  | 'journey'
  | 'github'
  | 'resume'
  | 'contact';

export interface SectionMeta {
  id: SectionId;
  eyebrow: string;
  title: string;
  description?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: IconName;
}

export interface AboutContent {
  paragraphs: string[];
  focusAreas: FocusArea[];
}

export interface ResponsibilityGroup {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  responsibilities: ResponsibilityGroup[];
  technologies: string[];
}

export interface FlowStep {
  label: string;
  detail?: string;
  icon?: IconName;
  tone?: Tone;
}

export interface ModuleTile {
  label: string;
  icon: IconName;
}

export type ProjectVisual =
  | { kind: 'modules'; title: string; items: ModuleTile[] }
  | { kind: 'flow'; title: string; steps: FlowStep[] }
  | { kind: 'pipeline'; title: string; encrypt: FlowStep[]; decrypt: FlowStep[] };

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  visual: ProjectVisual;
}

export interface ArchitectureLayer {
  name: string;
  technology: string;
  description: string;
  icon: IconName;
  tone: Tone;
}

export interface ConceptCard {
  title: string;
  description: string;
  icon: IconName;
  tags?: string[];
  tone?: Tone;
}

export interface ArchitectureContent {
  layers: ArchitectureLayer[];
  crossCutting: string[];
  concepts: ConceptCard[];
  principles: string[];
}

export interface EncryptionFact {
  label: string;
  value: string;
}

export interface SecurityContent {
  controls: ConceptCard[];
  encryptFlow: FlowStep[];
  decryptFlow: FlowStep[];
  encryptionFacts: EncryptionFact[];
}

export type CodeLanguage = 'csharp' | 'sql';

export interface CodeSnippet {
  title: string;
  language: CodeLanguage;
  caption?: string;
  code: string;
}

export interface BackendContent {
  requestLifecycle: FlowStep[];
  capabilities: ConceptCard[];
  snippet: CodeSnippet;
}

export interface DatabaseEngine {
  name: string;
  icon: IconName;
  tagline: string;
  capabilities: string[];
  tone: Tone;
}

export interface SchemaEntity {
  name: string;
  columns: string[];
  /** Columns rendered with an "encrypted" marker. */
  encrypted?: string[];
}

export interface DatabaseContent {
  engines: DatabaseEngine[];
  practices: ConceptCard[];
  schema: SchemaEntity[];
  snippets: CodeSnippet[];
}

export interface JourneyStep {
  title: string;
  description: string;
  icon: IconName;
}

export interface GithubContent {
  description: string;
  /** Shown while repositories are loading or when the username is a placeholder. */
  placeholderNote: string;
}

export interface ResumeInfo {
  url: string;
  fileName: string;
  description: string;
  viewLabel: string;
  downloadLabel: string;
}

export interface ContactContent {
  intro: string;
  availabilityNote: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  nav: NavItem[];
  social: SocialLink[];
  sections: Record<SectionId, SectionMeta>;
  about: AboutContent;
  experience: ExperienceEntry[];
  projects: Project[];
  architecture: ArchitectureContent;
  security: SecurityContent;
  backend: BackendContent;
  database: DatabaseContent;
  journey: JourneyStep[];
  github: GithubContent;
  resume: ResumeInfo;
  contact: ContactContent;
}
