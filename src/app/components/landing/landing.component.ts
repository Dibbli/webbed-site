import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IconLinkComponent } from '../icon-link/icon-link.component';

@Component({
  selector: 'app-landing',
  imports: [IconLinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="home"
      class="flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      <div class="max-w-3xl text-center">
        <h1 class="mb-4 text-3xl sm:text-5xl md:text-6xl font-bold text-fg">
          Hi, I'm <span class="text-accent">{{ profile().name }}</span>
        </h1>
        <p class="mb-8 text-lg sm:text-xl md:text-2xl text-fg-muted">{{ profile().tagline }}</p>
        <p class="mx-auto mb-10 max-w-xl text-fg-muted">{{ profile().bio }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <app-icon-link
            [href]="profile().github"
            icon="github-logo"
            label="GitHub"
            variant="secondary"
            ariaLabel="GitHub Profile"
          />
          <app-icon-link
            [href]="'mailto:' + profile().email"
            icon="envelope"
            label="Contact"
            variant="primary"
            [external]="false"
            ariaLabel="Email"
          />
          <app-icon-link
            href="/botond-mezei-cv.pdf"
            icon="file-arrow-down"
            label="CV"
            variant="secondary"
            [external]="false"
            [download]="true"
            ariaLabel="Download CV"
          />
        </div>
      </div>
      <div class="mt-8 sm:mt-16 animate-bounce">
        <a href="#skills" class="text-fg-muted hover:text-accent transition-colors" aria-label="Scroll to skills section">
          <i class="ph ph-caret-down text-3xl"></i>
        </a>
      </div>
    </section>
  `,
})
export class LandingComponent {
  protected profile = inject(DataService).profile;
}
