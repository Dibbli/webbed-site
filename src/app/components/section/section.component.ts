import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section [id]="sectionId()" class="section">
      <div class="mx-auto" [class]="maxWidth()">
        <h2 class="section-title" [class]="titleSize()">{{ title() }}</h2>
        <ng-content />
      </div>
    </section>
  `,
})
export class SectionComponent {
  readonly sectionId = input.required<string>();
  readonly title = input.required<string>();
  readonly titleSize = input('text-3xl');
  readonly maxWidth = input('max-w-3xl');
}
