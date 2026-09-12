import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../components/button/button';
import { Icon } from '../../components/icon/icon';
import { Reveal } from '../../components/reveal/reveal.directive';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { portfolioData } from '../../data/portfolioData';

type SubmitState = 'idle' | 'sent';

/**
 * Contact form without a backend: on submit, the message is handed to the
 * visitor's email client via a `mailto:` link built from the form values.
 */
@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule, SectionHeading, Button, Icon, Reveal],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly meta = portfolioData.sections.contact;
  protected readonly personal = portfolioData.personal;
  protected readonly contact = portfolioData.contact;
  protected readonly social = portfolioData.social;

  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
  });

  protected readonly submitted = signal(false);
  protected readonly state = signal<SubmitState>('idle');

  protected showError(control: keyof typeof this.form.controls): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || this.submitted());
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();
    const body = `${message}\n\n— ${name}\n${email}`;
    const href =
      `mailto:${encodeURIComponent(this.personal.email)}` +
      `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    this.state.set('sent');
  }

  protected reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.state.set('idle');
  }
}
