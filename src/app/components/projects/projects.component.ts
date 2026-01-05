import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SectionComponent } from '../section/section.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PersonalProjectsComponent } from '../personal-projects/personal-projects.component';

@Component({
  selector: 'app-projects',
  imports: [SectionComponent, ProjectCardComponent, PersonalProjectsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-section sectionId="projects" title="Projects" titleSize="text-2xl sm:text-3xl" maxWidth="max-w-5xl">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (project of projects(); track project.id) {
          <app-project-card [project]="project" />
        }
        <app-personal-projects />
      </div>
    </app-section>
  `,
})
export class ProjectsComponent {
  protected projects = inject(DataService).featuredProjects;
}
