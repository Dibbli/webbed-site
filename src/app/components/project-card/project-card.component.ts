import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Project } from '../../models';
import { TechBadgeListComponent } from '../tech-badge-list/tech-badge-list.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';

@Component({
  selector: 'app-project-card',
  imports: [TechBadgeListComponent, IconLinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (project(); as proj) {
      <article
        class="card flex flex-col transition-colors hover:border-accent"
      >
        <h3 class="mb-2 text-xl font-bold text-fg">{{ proj.title }}</h3>
        <p class="mb-4 flex-grow text-fg-muted">{{ proj.description }}</p>
        <app-tech-badge-list hostClass="mb-4 flex flex-wrap gap-2" [technologies]="proj.technologies" />
        <div class="flex gap-4">
          @if (proj.githubUrl) {
            <app-icon-link
              [href]="proj.githubUrl"
              icon="github-logo"
              label="Code"
              [ariaLabel]="'View ' + proj.title + ' source code on GitHub'"
            />
          }
        </div>
      </article>
    }
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
