import { PortfolioData } from './portfolio.models';

/**
 * Central portfolio content.
 *
 * Everything the UI renders comes from this file. Values in [square brackets]
 * and UPPER_SNAKE_CASE identifiers are placeholders — replace them with your
 * real details. Nothing here should be hard-coded inside components.
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: '[Your Name]',
    role: 'Software Engineer',
    positioning: 'Software Engineer | .NET & Enterprise Application Development',
    headline: 'Building secure, scalable and enterprise-grade applications.',
    headlineHighlight: 'enterprise-grade',
    supportingText:
      'I specialize in building enterprise applications and secure backend systems using .NET, ASP.NET Core, Angular, PostgreSQL and SQL Server.',
    location: '[City, Country]',
    email: '[your.email@example.com]',
    githubUsername: 'GITHUB_USERNAME',
    linkedinUsername: 'LINKEDIN_USERNAME',
  },

  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'security', label: 'Security' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],

  social: [
    {
      label: 'GitHub',
      handle: 'GITHUB_USERNAME',
      url: 'https://github.com/GITHUB_USERNAME',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      handle: 'LINKEDIN_USERNAME',
      url: 'https://www.linkedin.com/in/LINKEDIN_USERNAME',
      icon: 'linkedin',
    },
  ],

  sections: {
    about: {
      id: 'about',
      number: '01',
      eyebrow: 'About',
      title: 'Enterprise software, built with care for the data behind it.',
    },
    experience: {
      id: 'experience',
      number: '02',
      eyebrow: 'Experience',
      title: 'Professional experience',
      description:
        'Hands-on work across the full stack of enterprise applications — from database design and secure APIs to Angular front ends and production support.',
    },
    projects: {
      id: 'projects',
      number: '03',
      eyebrow: 'Featured Projects',
      title: 'Selected work',
      description:
        'Representative systems and building blocks from enterprise HRMS and secure API development.',
    },
    architecture: {
      id: 'architecture',
      number: '04',
      eyebrow: 'System Architecture',
      title: 'Layered systems with clear boundaries',
      description:
        'A typical enterprise application I work on separates presentation, API, business logic, data access and storage — with security, logging and error handling applied consistently across every layer.',
    },
    security: {
      id: 'security',
      number: '05',
      eyebrow: 'Security Engineering',
      title: 'Security is a design constraint, not a feature.',
      description:
        'Enterprise HR data is sensitive by default. I build APIs where identity, access, encryption, masking and auditability are designed in from the first migration.',
    },
    backend: {
      id: 'backend',
      number: '06',
      eyebrow: 'Backend Engineering',
      title: 'ASP.NET Core APIs that are predictable under pressure',
      description:
        'Clean request pipelines, explicit dependencies, consistent error contracts and structured logging — the foundations of a maintainable Web API.',
    },
    database: {
      id: 'database',
      number: '07',
      eyebrow: 'Database Engineering',
      title: 'Relational data, modelled and queried with intent',
      description:
        'PostgreSQL and SQL Server work spanning schema design, complex reporting queries, views, functions, stored procedures and performance tuning.',
    },
    journey: {
      id: 'journey',
      number: '08',
      eyebrow: 'Development Journey',
      title: 'How my focus has evolved',
      description:
        'Each stage built on the previous one — from writing backend code to designing systems where security and data protection are first-class concerns.',
    },
    github: {
      id: 'github',
      number: '09',
      eyebrow: 'GitHub',
      title: 'Open source & code samples',
    },
    resume: {
      id: 'resume',
      number: '10',
      eyebrow: 'Resume',
      title: 'Resume',
    },
    contact: {
      id: 'contact',
      number: '11',
      eyebrow: 'Contact',
      title: "Let's build something secure and scalable.",
    },
  },

  about: {
    paragraphs: [
      'I am a software engineer focused on enterprise application development with the Microsoft stack. My day-to-day work centres on HRMS systems: designing the database schemas that hold employee, job and organisational data, building the ASP.NET Core Web APIs that expose it safely, and delivering the Angular interfaces that HR teams use.',
      'A large part of that work is protecting sensitive data. I implement authentication and authorization, field-level encryption with AES-256-GCM, data masking, hashing and audit logging so that personal information stays protected at rest, in transit and in the logs.',
      'I care about systems that stay maintainable: explicit dependencies, well-defined layers, predictable error handling and SQL that is written to be read by the next engineer as much as by the database.',
    ],
    focusAreas: [
      {
        title: 'Enterprise HRMS applications',
        description:
          'Employee lifecycle, job and organisational data, reporting and the workflows that connect them.',
        icon: 'building',
      },
      {
        title: 'Secure backend APIs',
        description:
          'ASP.NET Core Web APIs with authentication, authorization, validation and hardened data handling.',
        icon: 'shield-check',
      },
      {
        title: 'Angular front ends',
        description:
          'TypeScript applications that consume REST APIs and present complex data clearly.',
        icon: 'monitor',
      },
      {
        title: 'Relational databases',
        description:
          'PostgreSQL and SQL Server schema design, query optimisation and data integrity.',
        icon: 'database',
      },
    ],
  },

  experience: [
    {
      company: '[Company Name]',
      title: '[Job Title]',
      start: '[Start Date]',
      end: '[End Date]',
      location: '[Location]',
      summary:
        'Full-stack development on an enterprise HRMS platform, covering ASP.NET Core Web APIs, Angular front ends, PostgreSQL and SQL Server databases, and application security.',
      responsibilities: [
        {
          title: 'Backend & APIs',
          items: [
            'Designed and developed RESTful endpoints with ASP.NET Core Web API and Entity Framework Core.',
            'Implemented authentication and authorization for API access, including JWT-based flows.',
            'Applied API security practices such as input validation, secure configuration and consistent error responses.',
          ],
        },
        {
          title: 'Data protection',
          items: [
            'Implemented field-level encryption for sensitive employee data using AES-256-GCM.',
            'Added data masking, hashing and audit logging around sensitive operations.',
            'Integrated CAPTCHA verification on public-facing entry points.',
          ],
        },
        {
          title: 'Database engineering',
          items: [
            'Built database views, PostgreSQL functions and SQL Server stored procedures for reporting and data workflows.',
            'Optimised slow SQL queries and reviewed indexing for high-traffic reads.',
          ],
        },
        {
          title: 'Frontend & delivery',
          items: [
            'Developed Angular components and services consuming the platform APIs.',
            'Debugged production issues and resolved QA-reported defects across the stack.',
          ],
        },
      ],
      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Web API',
        'Entity Framework Core',
        'Angular',
        'TypeScript',
        'PostgreSQL',
        'SQL Server',
        'JWT',
        'AES-256-GCM',
      ],
    },
  ],

  projects: [
    {
      id: 'enterprise-hrms',
      title: 'Enterprise HRMS Platform',
      category: 'Enterprise application',
      problem:
        'Enterprise HR data — employees, job assignments and organisational structure — needs a single, secured system of record with reliable reporting and controlled workflows.',
      solution:
        'A .NET and Angular HRMS platform: ASP.NET Core Web APIs over Entity Framework Core with PostgreSQL and SQL Server, role-based authorization, and reporting built on database views, functions and stored procedures.',
      contribution: [
        'Designed REST endpoints for employee, job and organisational data',
        'Implemented authentication and role-based authorization on the API',
        'Built reporting queries, views, functions and stored procedures',
        'Delivered Angular features consuming the platform APIs',
        'Debugged production issues and resolved QA-reported defects',
      ],
      technologies: [
        '.NET',
        'ASP.NET Core',
        'Angular',
        'Entity Framework Core',
        'PostgreSQL',
        'SQL Server',
      ],
      visual: {
        kind: 'modules',
        title: 'Platform modules',
        items: [
          { label: 'Employees', icon: 'users' },
          { label: 'Job information', icon: 'briefcase' },
          { label: 'Organisation', icon: 'building' },
          { label: 'Authentication', icon: 'fingerprint' },
          { label: 'Authorization', icon: 'shield-check' },
          { label: 'Reporting', icon: 'bar-chart' },
          { label: 'Workflows', icon: 'workflow' },
          { label: 'Audit trail', icon: 'clipboard' },
        ],
      },
    },
    {
      id: 'secure-api-data-protection',
      title: 'Secure API & Data Protection',
      category: 'Application security',
      problem:
        'Sensitive personal fields must stay protected even if the database or a backup is exposed, while day-to-day users still need to work with the records.',
      solution:
        'A field-level protection layer: AES-256-GCM encryption and decryption services with a random nonce per value, keys held outside the database, plus masking, hashing and audit logging around every access to protected data.',
      contribution: [
        'Implemented the AES-256-GCM encryption and decryption services',
        'Integrated encrypted fields with Entity Framework Core entities and migrations',
        'Added data masking for display and hashing for lookups',
        'Wrote audit logging for access to and changes of protected data',
        'Added CAPTCHA verification to public entry points',
      ],
      technologies: [
        'ASP.NET Core',
        'System.Security.Cryptography',
        'Entity Framework Core',
        'PostgreSQL',
        'SQL Server',
      ],
      visual: {
        kind: 'pipeline',
        title: 'Encryption pipeline',
        encrypt: [
          { label: 'Plaintext', icon: 'file-text' },
          {
            label: 'Encryption service',
            detail: 'AES-256-GCM · random nonce',
            icon: 'lock',
            tone: 'accent',
          },
          { label: 'Ciphertext + tag', icon: 'hash' },
          { label: 'Database', icon: 'database', tone: 'sky' },
        ],
        decrypt: [
          { label: 'Database', icon: 'database', tone: 'sky' },
          { label: 'Ciphertext + tag', icon: 'hash' },
          {
            label: 'Decryption service',
            detail: 'tag verified before output',
            icon: 'key',
            tone: 'accent',
          },
          { label: 'Authorized caller', icon: 'shield-check', tone: 'emerald' },
        ],
      },
    },
    {
      id: 'enterprise-api-architecture',
      title: 'Enterprise API Architecture',
      category: 'System design',
      problem:
        'Multiple modules and clients need one consistent, testable request path where security is enforced before any business logic runs.',
      solution:
        'A layered ASP.NET Core architecture: identity and permissions checked at the boundary, thin controllers, a dependency-injected service layer for business rules, and Entity Framework Core mediating all access to PostgreSQL and SQL Server.',
      contribution: [
        'Defined the controller → service → data-access structure',
        'Configured dependency injection, exception handling and logging',
        'Applied JWT authentication and policy-based authorization',
        'Standardised validation and error responses across endpoints',
      ],
      technologies: [
        'Angular',
        'ASP.NET Core',
        'Entity Framework Core',
        'PostgreSQL',
        'SQL Server',
      ],
      visual: {
        kind: 'flow',
        title: 'Request flow',
        steps: [
          { label: 'Angular', detail: 'TypeScript client', icon: 'monitor', tone: 'sky' },
          {
            label: 'ASP.NET Core API',
            detail: 'Controllers & middleware',
            icon: 'server',
            tone: 'accent',
          },
          {
            label: 'Authentication / Authorization',
            detail: 'JWT · policies · roles',
            icon: 'shield-check',
            tone: 'emerald',
          },
          { label: 'Service layer', detail: 'Application services via DI', icon: 'layers' },
          { label: 'Business logic', detail: 'Validation & rules', icon: 'cpu' },
          { label: 'Entity Framework Core', detail: 'Data access & migrations', icon: 'box' },
          {
            label: 'PostgreSQL / SQL Server',
            detail: 'Relational storage',
            icon: 'database',
            tone: 'sky',
          },
        ],
      },
    },
  ],

  architecture: {
    layers: [
      {
        name: 'Frontend',
        technology: 'Angular · TypeScript',
        description: 'Component-based UI consuming REST endpoints over HTTPS.',
        responsibilities: ['Components', 'Services', 'HTTP interceptors', 'Route guards'],
        icon: 'monitor',
        tone: 'sky',
      },
      {
        name: 'API',
        technology: 'ASP.NET Core Web API',
        description: 'Controllers, routing, model validation and the middleware pipeline.',
        responsibilities: ['Controllers', 'Middleware', 'DTO validation', 'Problem details'],
        icon: 'server',
        tone: 'accent',
      },
      {
        name: 'Business logic',
        technology: 'Application services · C#',
        description:
          'Rules, orchestration and transactions, composed through dependency injection.',
        responsibilities: [
          'Application services',
          'Business rules',
          'Transactions',
          'Encryption service',
        ],
        icon: 'cpu',
        tone: 'neutral',
      },
      {
        name: 'Data access',
        technology: 'Entity Framework Core',
        description: 'DbContext, entity mappings, migrations and query translation.',
        responsibilities: ['DbContext', 'Entity configuration', 'Value converters', 'Migrations'],
        icon: 'box',
        tone: 'neutral',
      },
      {
        name: 'Database',
        technology: 'PostgreSQL · SQL Server',
        description: 'Normalised schemas, views, functions, stored procedures and indexes.',
        responsibilities: ['Tables & constraints', 'Views', 'Functions & procedures', 'Indexes'],
        icon: 'database',
        tone: 'sky',
      },
    ],
    crossCutting: [
      'Authentication',
      'Authorization',
      'Exception handling',
      'Logging',
      'Encryption',
      'Auditing',
    ],
    concepts: [
      {
        title: 'API architecture',
        description:
          'Resource-oriented REST endpoints with clear contracts, versioned DTOs and predictable status codes so clients can be built and tested independently.',
        icon: 'globe',
      },
      {
        title: 'Dependency Injection',
        description:
          'Services, repositories, encryption and logging are registered in the ASP.NET Core container and injected through interfaces — keeping components loosely coupled and testable.',
        icon: 'git-branch',
      },
      {
        title: 'Entity Framework Core',
        description:
          'Entities, relationships and value conversions are configured explicitly; migrations keep schema changes reviewable and repeatable across environments.',
        icon: 'box',
      },
      {
        title: 'Authentication & Authorization',
        description:
          'Identity is established once at the edge (for example with JWT bearer tokens) and permissions are enforced with policies and roles before business logic runs.',
        icon: 'fingerprint',
      },
      {
        title: 'Exception handling',
        description:
          'Centralised exception middleware maps failures to consistent problem responses, hides internals from clients and records the details for diagnosis.',
        icon: 'alert',
      },
      {
        title: 'Logging',
        description:
          'Structured logs with correlation identifiers across the request pipeline, with sensitive values excluded or masked before they are written.',
        icon: 'activity',
      },
      {
        title: 'Database access',
        description:
          'Read paths use projections, views and functions where they perform best; write paths go through validated, transactional services.',
        icon: 'database',
      },
      {
        title: 'Scalability',
        description:
          'Stateless API instances, efficient queries and appropriate indexing allow the application tier to scale horizontally without special-casing the database.',
        icon: 'layers',
      },
      {
        title: 'Security',
        description:
          'Encryption of sensitive fields, masking in responses, hashing where reversibility is not needed and an audit trail of access and changes.',
        icon: 'shield',
      },
    ],
    principles: [
      'Each layer depends only on the layer beneath it, through interfaces.',
      'Controllers stay thin; rules live in services that can be unit tested.',
      'Security checks happen before business logic, never after.',
      'Cross-cutting concerns are configured once and applied everywhere.',
    ],
  },

  security: {
    controls: [
      {
        title: 'Authentication',
        description:
          'Verifies who is calling. Token-based authentication (JWT bearer) establishes identity at the API boundary with short-lived, signed tokens.',
        icon: 'fingerprint',
        tags: ['JWT', 'Bearer tokens', 'Token validation'],
        tone: 'accent',
        visual: 'token',
      },
      {
        title: 'Authorization',
        description:
          'Decides what an authenticated caller may do. Role- and policy-based checks guard endpoints and individual operations on sensitive records.',
        icon: 'shield-check',
        tags: ['Roles', 'Policies', 'Claims'],
        tone: 'emerald',
        visual: 'policy',
      },
      {
        title: 'Encryption',
        description:
          'AES-256-GCM protects sensitive fields at rest. Each value gets a fresh random nonce and an authentication tag, so tampering is detected on read.',
        icon: 'lock',
        tags: ['AES-256-GCM', 'Field-level', 'Random nonce'],
        tone: 'accent',
        visual: 'cipher',
      },
      {
        title: 'Hashing',
        description:
          'One-way hashing for values that never need to be recovered — credentials, lookup keys and integrity checks — using salted, purpose-built algorithms.',
        icon: 'hash',
        tags: ['One-way', 'Salted', 'Integrity'],
        tone: 'sky',
        visual: 'hash',
      },
      {
        title: 'Masking',
        description:
          'Sensitive values are partially hidden in API responses, UI and logs so day-to-day users see only what their task requires.',
        icon: 'eye-off',
        tags: ['Partial display', 'Log redaction', 'Least exposure'],
        tone: 'amber',
        visual: 'mask',
      },
      {
        title: 'Audit logging',
        description:
          'Every access to or change of protected data is recorded with who, what, when and from where — producing a tamper-evident trail for reviews.',
        icon: 'clipboard',
        tags: ['Who / what / when', 'Immutable trail', 'Reviews'],
        tone: 'sky',
        visual: 'audit',
      },
      {
        title: 'CAPTCHA',
        description:
          'Human verification on public entry points such as sign-in and registration forms reduces automated abuse and credential stuffing.',
        icon: 'scan',
        tags: ['Bot protection', 'Public endpoints', 'Rate limiting'],
        tone: 'neutral',
        visual: 'captcha',
      },
    ],
    encryptFlow: [
      {
        label: 'AES-256-GCM',
        detail: 'Authenticated encryption mode',
        icon: 'shield',
        tone: 'accent',
      },
      { label: 'Plaintext', detail: 'Sensitive field value', icon: 'file-text' },
      {
        label: 'Encryption service',
        detail: 'Random 96-bit nonce · 128-bit tag',
        icon: 'lock',
        tone: 'accent',
      },
      { label: 'Ciphertext', detail: 'nonce ‖ tag ‖ ciphertext', icon: 'hash' },
      { label: 'Database', detail: 'Stored encrypted at rest', icon: 'database', tone: 'sky' },
    ],
    decryptFlow: [
      { label: 'Database', detail: 'Encrypted column read', icon: 'database', tone: 'sky' },
      { label: 'Ciphertext', detail: 'nonce ‖ tag ‖ ciphertext', icon: 'hash' },
      {
        label: 'Decryption service',
        detail: 'Tag verified — tampering rejected',
        icon: 'key',
        tone: 'accent',
      },
      {
        label: 'Authorized application',
        detail: 'Policy check · audit entry',
        icon: 'shield-check',
        tone: 'emerald',
      },
      { label: 'Plaintext', detail: 'Masked unless permitted', icon: 'file-text' },
    ],
    encryptionFacts: [
      { label: 'Algorithm', value: 'AES-256-GCM' },
      { label: 'Nonce', value: '96-bit, random per operation' },
      { label: 'Auth tag', value: '128-bit, verified on decrypt' },
      { label: 'Key storage', value: 'Secure store, outside the database' },
      { label: 'Scope', value: 'Field-level, selected columns' },
    ],
    valueStates: [
      {
        label: 'Authorized application',
        context: 'Decrypted in memory for a permitted caller',
        sample: '1990-04-12',
        icon: 'shield-check',
        tone: 'emerald',
      },
      {
        label: 'Database column',
        context: 'nonce ‖ tag ‖ ciphertext, Base64',
        sample: 'kQ7v…Zt2A==',
        icon: 'database',
        tone: 'sky',
      },
      {
        label: 'API response & logs',
        context: 'Masked unless the caller is permitted',
        sample: '••••-••-12',
        icon: 'eye-off',
        tone: 'amber',
      },
    ],
  },

  backend: {
    requestLifecycle: [
      { label: 'HTTP request', icon: 'globe', tone: 'sky' },
      { label: 'Exception handling', detail: 'Problem-details responses', icon: 'alert' },
      { label: 'Authentication', detail: 'JWT bearer', icon: 'fingerprint', tone: 'accent' },
      { label: 'Authorization', detail: 'Policies & roles', icon: 'shield-check', tone: 'emerald' },
      { label: 'Controller', detail: 'Validated DTOs', icon: 'server' },
      { label: 'Service', detail: 'Resolved via DI', icon: 'layers' },
      { label: 'EF Core', detail: 'DbContext', icon: 'box' },
      { label: 'Database', icon: 'database', tone: 'sky' },
    ],
    capabilities: [
      {
        title: 'C# & .NET',
        description:
          'Modern C# with nullable reference types, records and async/await throughout the request path.',
        icon: 'code',
        tags: ['C#', '.NET'],
      },
      {
        title: 'ASP.NET Core Web API',
        description:
          'Attribute-routed controllers, model binding and validation, filters and a middleware pipeline configured per environment.',
        icon: 'server',
        tags: ['ASP.NET Core', 'Web API', 'REST APIs'],
      },
      {
        title: 'Dependency Injection',
        description:
          'Interfaces registered with explicit lifetimes; encryption, auditing and data access are injected rather than instantiated.',
        icon: 'git-branch',
        tags: ['DI container', 'Lifetimes', 'Interfaces'],
      },
      {
        title: 'Entity Framework Core',
        description:
          'Fluent configuration, value converters for encrypted fields, migrations and query tuning against PostgreSQL and SQL Server.',
        icon: 'box',
        tags: ['EF Core', 'Migrations', 'Converters'],
      },
      {
        title: 'Authentication & Authorization',
        description:
          'JWT bearer authentication with policy-based authorization applied at endpoint and operation level.',
        icon: 'shield-check',
        tags: ['JWT', 'Policies', 'API security'],
      },
      {
        title: 'Exception handling & logging',
        description:
          'Central exception middleware, consistent error contracts and structured logs with sensitive data removed.',
        icon: 'activity',
        tags: ['Exception handling', 'Logging'],
      },
      {
        title: 'Encryption services',
        description:
          'AES-256-GCM encryption and decryption services with nonce management and key access abstracted behind an interface.',
        icon: 'lock',
        tags: ['Encryption', 'AES-256-GCM'],
      },
      {
        title: 'API security',
        description:
          'HTTPS-only, strict input validation, CAPTCHA on public forms and least-privilege data access across the service layer.',
        icon: 'shield',
        tags: ['Validation', 'CAPTCHA', 'Least privilege'],
      },
    ],
    snippet: {
      title: 'FieldEncryptionService.cs',
      language: 'csharp',
      caption:
        'Illustrative AES-256-GCM field encryption: a random nonce per value, the authentication tag stored alongside the ciphertext, and the key supplied by an injected provider.',
      code: `public sealed class FieldEncryptionService : IFieldEncryptionService
{
    private const int NonceSize = 12; // 96-bit nonce, unique per value
    private const int TagSize = 16;   // 128-bit authentication tag

    private readonly IEncryptionKeyProvider _keys;
    private readonly IAuditLogger _audit;

    public FieldEncryptionService(IEncryptionKeyProvider keys, IAuditLogger audit)
    {
        _keys = keys;
        _audit = audit;
    }

    public string Encrypt(string plaintext, string fieldName)
    {
        var nonce = RandomNumberGenerator.GetBytes(NonceSize);
        var data = Encoding.UTF8.GetBytes(plaintext);
        var cipher = new byte[data.Length];
        var tag = new byte[TagSize];

        using var aes = new AesGcm(_keys.GetCurrentKey(), TagSize);
        aes.Encrypt(nonce, data, cipher, tag);

        _audit.Record(AuditAction.Encrypt, fieldName);

        // Layout: nonce || tag || ciphertext, stored as a single column value
        return Convert.ToBase64String([.. nonce, .. tag, .. cipher]);
    }
}`,
    },
  },

  database: {
    engines: [
      {
        name: 'PostgreSQL',
        icon: 'database',
        tone: 'sky',
        tagline: 'Primary store for transactional and reporting workloads.',
        capabilities: [
          'Complex SQL across many related tables',
          'Multi-table joins and effective-dated lookups',
          'Common table expressions (CTEs) for readable reporting queries',
          'Views that present stable shapes to the API',
          'Functions encapsulating data workflows',
          'Query optimisation with EXPLAIN and targeted indexes',
          'Data transformation and cleanup scripts',
        ],
      },
      {
        name: 'SQL Server',
        icon: 'server',
        tone: 'accent',
        tagline: 'Established enterprise workloads and integrations.',
        capabilities: [
          'T-SQL queries for operational and reporting needs',
          'Views for reporting and access control',
          'Stored procedures for data workflows and batch operations',
          'Data management, corrections and imports',
          'Query optimisation with execution plans and indexing',
        ],
      },
    ],
    practices: [
      {
        title: 'Database design',
        description: 'Normalised schemas with clear ownership of each entity and its history.',
        icon: 'table',
      },
      {
        title: 'Relationships',
        description: 'Foreign keys and cascade rules that reflect real business constraints.',
        icon: 'git-branch',
      },
      {
        title: 'Indexing',
        description: 'Indexes chosen from real query patterns, verified with execution plans.',
        icon: 'activity',
      },
      {
        title: 'Transactions',
        description: 'Multi-step changes committed atomically with appropriate isolation.',
        icon: 'refresh',
      },
      {
        title: 'Data integrity',
        description:
          'Constraints, unique keys and checks enforced at the database, not only in code.',
        icon: 'shield-check',
      },
      {
        title: 'Migrations',
        description: 'Schema changes versioned with EF Core migrations and reviewed like code.',
        icon: 'workflow',
      },
      {
        title: 'Encrypted fields',
        description:
          'Sensitive columns stored as AES-256-GCM ciphertext with hashed lookup columns.',
        icon: 'lock',
      },
    ],
    schema: [
      {
        name: 'employee',
        columns: [
          'employee_id',
          'employee_number',
          'first_name',
          'last_name',
          'national_id',
          'date_of_birth',
          'department_id',
        ],
        encrypted: ['national_id', 'date_of_birth'],
      },
      {
        name: 'job_information',
        columns: ['job_id', 'employee_id', 'job_title', 'grade', 'effective_from', 'effective_to'],
      },
      {
        name: 'department',
        columns: ['department_id', 'department_name', 'parent_department_id', 'location_id'],
      },
      {
        name: 'audit_log',
        columns: ['audit_id', 'actor_id', 'entity', 'entity_id', 'action', 'occurred_at'],
      },
    ],
    snippets: [
      {
        title: 'headcount_by_department.sql',
        language: 'sql',
        caption:
          'PostgreSQL — a CTE isolates current assignments before aggregating per department.',
        code: `WITH current_assignments AS (
    SELECT e.employee_id,
           e.department_id,
           j.job_title,
           j.effective_from
    FROM   employee e
    JOIN   job_information j ON j.employee_id = e.employee_id
    WHERE  j.effective_to IS NULL
)
SELECT d.department_name,
       COUNT(*)                                   AS headcount,
       COUNT(*) FILTER (WHERE a.effective_from >= CURRENT_DATE - INTERVAL '90 days')
                                                  AS recent_assignments
FROM   current_assignments a
JOIN   department d ON d.department_id = a.department_id
GROUP  BY d.department_name
ORDER  BY headcount DESC;`,
      },
      {
        title: 'usp_CloseJobAssignment.sql',
        language: 'sql',
        caption:
          'SQL Server — a stored procedure closes an assignment and writes the audit row in one transaction.',
        code: `CREATE OR ALTER PROCEDURE dbo.usp_CloseJobAssignment
    @JobId    INT,
    @ActorId  INT,
    @ClosedOn DATE
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRANSACTION;

    UPDATE dbo.JobInformation
    SET    EffectiveTo = @ClosedOn
    WHERE  JobId = @JobId
      AND  EffectiveTo IS NULL;

    INSERT INTO dbo.AuditLog (ActorId, Entity, EntityId, [Action], OccurredAt)
    VALUES (@ActorId, N'JobInformation', @JobId, N'Close', SYSUTCDATETIME());

    COMMIT TRANSACTION;
END;`,
      },
    ],
  },

  journey: [
    {
      title: 'Backend Development',
      description:
        'Writing C# services and APIs — learning how requests, data and errors move through a system.',
      icon: 'code',
    },
    {
      title: 'Enterprise Application Development',
      description:
        'Working on HRMS systems where correctness, history and reporting matter to real teams.',
      icon: 'building',
    },
    {
      title: 'Database Engineering',
      description:
        'Owning schemas, views, functions and stored procedures; tuning the queries behind them.',
      icon: 'database',
    },
    {
      title: 'Frontend Development',
      description: 'Building Angular applications that make complex enterprise data usable.',
      icon: 'monitor',
    },
    {
      title: 'API Architecture',
      description:
        'Designing consistent REST contracts, layered services and dependency-injected components.',
      icon: 'server',
    },
    {
      title: 'Application Security',
      description: 'Authentication, authorization, CAPTCHA and hardening APIs against misuse.',
      icon: 'shield-check',
    },
    {
      title: 'Encryption & Data Protection',
      description:
        'Field-level AES-256-GCM encryption, masking, hashing and audit trails for sensitive data.',
      icon: 'lock',
    },
    {
      title: 'Enterprise Architecture',
      description:
        'Thinking in systems: boundaries, scalability, security and the operational reality of production.',
      icon: 'layers',
    },
  ],

  github: {
    description:
      'Code samples, experiments and reference implementations around .NET, ASP.NET Core, Angular and database work.',
    placeholderNote:
      'Public repositories are loaded from the GitHub API once GITHUB_USERNAME is configured in portfolioData.ts.',
  },

  resume: {
    url: '/resume.pdf',
    fileName: 'resume.pdf',
    description:
      'A concise summary of my experience with .NET, ASP.NET Core, Angular, PostgreSQL, SQL Server and application security.',
    viewLabel: 'View Resume',
    downloadLabel: 'Download Resume',
  },

  contact: {
    intro:
      'Whether you are hiring for enterprise .NET development or want to discuss secure API design, I would be glad to talk.',
    availabilityNote: 'Messages open in your email client — no data is stored by this site.',
  },
};
