import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'hostClass()' },
  template: `
    @for (tech of technologies(); track tech) {
      <span class="tech-badge">{{ tech }}</span>
    }
  `,
})
export class TechBadgeListComponent {
  readonly technologies = input<string[]>([]);
  readonly hostClass = input('flex flex-wrap gap-2');
}
