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
  /** Exact substring of `headline` to emphasise visually (optional). */
  headlineHighlight?: string;
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
  /** Two-digit ordinal shown beside the eyebrow, e.g. "01". */
  number?: string;
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
  /** The need or constraint the system addresses. */
  problem: string;
  /** What was built to address it. */
  solution: string;
  /** Concrete engineering work on the project. */
  contribution: string[];
  technologies: string[];
  visual: ProjectVisual;
}

export interface ArchitectureLayer {
  name: string;
  technology: string;
  description: string;
  /** Concrete building blocks that live in this layer. */
  responsibilities: string[];
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

/** Small CSS-drawn illustration rendered inside a security control card. */
export type SecurityVisualKind =
  'token' | 'policy' | 'cipher' | 'hash' | 'mask' | 'audit' | 'captcha';

export interface SecurityControl extends ConceptCard {
  visual: SecurityVisualKind;
}

/** One state of a sensitive value as it moves through the system. */
export interface ValueState {
  label: string;
  context: string;
  /** Illustrative sample only — never a real value. */
  sample: string;
  icon: IconName;
  tone: Tone;
}

export interface SecurityContent {
  controls: SecurityControl[];
  encryptFlow: FlowStep[];
  decryptFlow: FlowStep[];
  encryptionFacts: EncryptionFact[];
  valueStates: ValueState[];
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
