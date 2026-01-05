import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SectionComponent } from '../section/section.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';

@Component({
  selector: 'app-contact',
  imports: [SectionComponent, IconLinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-section sectionId="contact" title="Get In Touch" titleSize="mb-4 text-2xl sm:text-3xl" maxWidth="max-w-3xl text-center">
      <p class="mb-8 text-fg-muted">
        Have a question or want to work together? Feel free to reach out.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6">
        <app-icon-link
          [href]="'mailto:' + profile().email"
          icon="envelope"
          [label]="profile().email"
          variant="primary"
          [external]="false"
          extraClass="px-4 py-2.5 sm:px-6 sm:py-3"
        />
        <app-icon-link
          [href]="profile().github"
          icon="github-logo"
          label="GitHub"
          variant="secondary"
          extraClass="px-4 py-2.5 sm:px-6 sm:py-3"
        />
        <app-icon-link
          [href]="profile().linkedin"
          icon="linkedin-logo"
          label="LinkedIn"
          variant="secondary"
          extraClass="px-4 py-2.5 sm:px-6 sm:py-3"
        />
      </div>
    </app-section>
  `,
})
export class ContactComponent {
  protected profile = inject(DataService).profile;
}
