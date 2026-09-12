import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CodeSnippet } from '../../data/portfolio.models';
import { tokenize } from '../../utils/highlight';

@Component({
  selector: 'app-code-block',
  template: `
    <figure class="code">
      <figcaption class="code__bar">
        <span class="code__dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="code__title">{{ snippet().title }}</span>
        <span class="code__lang">{{ languageLabel() }}</span>
      </figcaption>
      <pre
        class="code__pre"
        tabindex="0"
      ><code [attr.aria-label]="snippet().title">@for (token of tokens(); track $index) {<span [class]="'tok tok--' + token.type">{{ token.text }}</span>}</code></pre>
      @if (snippet().caption; as caption) {
        <p class="code__caption">{{ caption }}</p>
      }
    </figure>
  `,
  styleUrl: './code-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlock {
  readonly snippet = input.required<CodeSnippet>();

  protected readonly tokens = computed(() =>
    tokenize(this.snippet().code, this.snippet().language),
  );
  protected readonly languageLabel = computed(() =>
    this.snippet().language === 'csharp' ? 'C#' : 'SQL',
  );
}
