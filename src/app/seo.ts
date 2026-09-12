import { DOCUMENT, EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { portfolioData } from './data/portfolioData';
import { isPlaceholder } from './utils/placeholders';

const JSON_LD_ID = 'portfolio-json-ld';

/**
 * Derives document metadata from `portfolioData` so the title, description,
 * Open Graph tags, canonical URL and structured data stay in sync with the
 * content. Runs during prerendering, so the generated HTML already contains
 * the final tags; on the client it only updates what is already there.
 *
 * Anything that depends on a placeholder value (name, deployed URL, social
 * handles) is skipped rather than emitted with fake data.
 */
export function provideSeo(): EnvironmentProviders {
  return provideAppInitializer(() => {
    const title = inject(Title);
    const meta = inject(Meta);
    const document = inject(DOCUMENT);
    const { personal, social } = portfolioData;

    const hasName = !isPlaceholder(personal.name);
    const pageTitle = hasName ? `${personal.name} | ${personal.positioning}` : personal.positioning;
    const description = `${personal.headline} ${personal.supportingText}`;
    const siteUrl = isPlaceholder(personal.websiteUrl)
      ? null
      : personal.websiteUrl.replace(/\/+$/, '');

    title.setTitle(pageTitle);
    meta.updateTag({ name: 'description', content: description });
    meta.updateTag({ property: 'og:title', content: pageTitle });
    meta.updateTag({ property: 'og:description', content: description });
    meta.updateTag({ name: 'twitter:title', content: pageTitle });
    meta.updateTag({ name: 'twitter:description', content: description });
    if (hasName) {
      meta.updateTag({ property: 'og:site_name', content: `${personal.name} — Portfolio` });
    }

    if (siteUrl) {
      meta.updateTag({ property: 'og:url', content: `${siteUrl}/` });
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${siteUrl}/`;
    }

    if (hasName && !document.getElementById(JSON_LD_ID)) {
      const sameAs = social.filter((link) => !isPlaceholder(link.handle)).map((link) => link.url);
      const person: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personal.name,
        jobTitle: personal.role,
        description: personal.supportingText,
      };
      if (siteUrl) person['url'] = `${siteUrl}/`;
      if (sameAs.length) person['sameAs'] = sameAs;

      const script = document.createElement('script');
      script.id = JSON_LD_ID;
      script.type = 'application/ld+json';
      // `<` is escaped so content can never close the script element early.
      script.text = JSON.stringify(person).replace(/</g, '\\u003c');
      document.head.appendChild(script);
    }
  });
}
