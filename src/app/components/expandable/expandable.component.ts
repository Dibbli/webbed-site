import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-expandable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      [class.grid-rows-[0fr]]="!open()"
      [class.grid-rows-[1fr]]="open()"
    >
      <div class="overflow-hidden">
        <ng-content />
      </div>
    </div>
  `,
})
export class ExpandableComponent {
  readonly open = input(false);
}
