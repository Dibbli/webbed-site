import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-education',
  imports: [SectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-section sectionId="education" title="Education">
      <div class="space-y-6">
        @for (edu of education(); track edu.id) {
          <div class="card">
            <p class="mb-1 text-sm text-accent">{{ edu.period }}</p>
            <h3 class="text-lg font-bold text-fg">{{ edu.degree }}</h3>
            <p class="text-fg-muted">{{ edu.institution }}</p>
            @if (edu.description) {
              <p class="mt-2 text-sm text-fg-muted">{{ edu.description }}</p>
            }
          </div>
        } @empty {
          <p class="text-fg-muted">No education entries yet.</p>
        }
      </div>
    </app-section>
  `,
})
export class EducationComponent {
  protected education = inject(DataService).education;
}
