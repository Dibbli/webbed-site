import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Skill } from '../../models';

@Component({
  selector: 'app-skill-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex items-center gap-2 rounded-lg border border-bg2 bg-bg1 px-4 py-2 text-fg"
    >
      @if (skill().icon) {
        <i class="ph {{ skill().icon }} text-xl text-accent"></i>
      }
      <span>{{ skill().name }}</span>
    </div>
  `,
})
export class SkillBadgeComponent {
  readonly skill = input.required<Skill>();
}
