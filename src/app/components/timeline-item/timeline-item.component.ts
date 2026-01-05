import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Experience } from '../../models';
import { TechBadgeListComponent } from '../tech-badge-list/tech-badge-list.component';

@Component({
  selector: 'app-timeline-item',
  imports: [TechBadgeListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex gap-4 sm:gap-8">
      <div class="flex flex-col items-center">
        <div class="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-bg0"></div>
        @if (!last()) {
          <div class="w-0.5 flex-1 bg-accent"></div>
        }
      </div>
      <div class="pb-6 sm:pb-10" [class.pb-0]="last()">
        <p class="mb-1 text-sm text-accent">{{ experience().period }}</p>
        <h3 class="text-xl font-bold text-fg">{{ experience().role }}</h3>
        <p class="mb-2 text-fg-muted">
          {{ experience().company }}
          @if (experience().project) {
            <span class="text-accent"> · {{ experience().project }}</span>
          }
        </p>
        <p class="mb-3 text-fg-muted">{{ experience().description }}</p>
        <app-tech-badge-list [technologies]="experience().technologies" />
      </div>
    </div>
  `,
})
export class TimelineItemComponent {
  readonly experience = input.required<Experience>();
  readonly last = input(false);
}
