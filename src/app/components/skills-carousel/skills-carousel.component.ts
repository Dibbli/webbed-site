import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';

@Component({
  selector: 'app-skills-carousel',
  imports: [SkillBadgeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll {
      animation: scroll 20s linear infinite;
    }

    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `,
  template: `
    <section id="skills" aria-label="Skills and technologies" class="overflow-hidden py-16">
      <h2 class="section-title text-2xl">Skills & Technologies</h2>
      <div class="relative">
        <div class="animate-scroll flex w-max gap-8">
          @for (skill of skills(); track skill.id) {
            <app-skill-badge [skill]="skill" />
          }
          <!-- Duplicate for seamless loop -->
          @for (skill of skills(); track 'dup-' + skill.id) {
            <app-skill-badge [skill]="skill" />
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsCarouselComponent {
  protected skills = inject(DataService).skills;
}
