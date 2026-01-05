import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SectionComponent } from '../section/section.component';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';

@Component({
  selector: 'app-experience',
  imports: [SectionComponent, TimelineItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-section sectionId="experience" title="Experience">
      <div class="flex flex-col">
        @for (exp of experience(); track exp.id; let last = $last) {
          <app-timeline-item [experience]="exp" [last]="last" />
        } @empty {
          <p class="text-fg-muted">No experience entries yet.</p>
        }
      </div>
    </app-section>
  `,
})
export class ExperienceComponent {
  protected experience = inject(DataService).experience;
}
