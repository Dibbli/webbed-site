import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ExpandableComponent } from '../expandable/expandable.component';
import { TechBadgeListComponent } from '../tech-badge-list/tech-badge-list.component';

@Component({
  selector: 'app-personal-projects',
  imports: [ExpandableComponent, TechBadgeListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="card flex flex-col text-left"
      (click)="open.set(!open())"
      [attr.aria-expanded]="open()"
    >
      <h3 class="text-xl font-bold text-fg">Personal Projects</h3>
      <p class="mt-2 flex-grow text-fg-muted">
        Most of my professional work is backoffice-based, so I can't really show it off here.
        Instead, here's a peek into what I tinker with in my free time. I don't code much outside
        of work, so set expectations accordingly :)
      </p>
      <app-expandable [open]="open()">
        <div class="mt-4 flex flex-col gap-4 border-t border-bg2 pt-4">
          @for (proj of projects(); track proj.id) {
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-bold text-fg">{{ proj.title }}</h4>
                @if (proj.githubUrl) {
                  <a
                    [href]="proj.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    [attr.aria-label]="'View ' + proj.title + ' on GitHub'"
                    class="text-fg-muted transition-colors hover:text-accent"
                    (click)="$event.stopPropagation()"
                  >
                    <i class="ph ph-github-logo"></i>
                  </a>
                }
              </div>
              <p class="mt-1 text-sm text-fg-muted">{{ proj.description }}</p>
              <app-tech-badge-list hostClass="mt-2 flex flex-wrap gap-2" [technologies]="proj.technologies" />
            </div>
          }
        </div>
      </app-expandable>
      <i
        class="ph ph-caret-down mt-4 self-center text-3xl text-accent transition-transform"
        [class.rotate-180]="open()"
      ></i>
    </button>
  `,
})
export class PersonalProjectsComponent {
  protected projects = inject(DataService).personalProjects;
  protected open = signal(false);
}
