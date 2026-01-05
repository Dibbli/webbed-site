import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="href()"
      [target]="external() ? '_blank' : null"
      [rel]="external() ? 'noopener noreferrer' : null"
      [attr.aria-label]="ariaLabel()"
      [attr.download]="download() ? '' : null"
      [class]="linkClass()"
    >
      <i class="ph ph-{{ icon() }} text-xl"></i>
      <span>{{ label() }}</span>
    </a>
  `,
})
export class IconLinkComponent {
  readonly href = input.required<string>();
  readonly icon = input.required<string>();
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'secondary' | 'inline'>('inline');
  readonly external = input(true);
  readonly download = input(false);
  readonly ariaLabel = input<string>();
  readonly extraClass = input('');

  protected linkClass = computed(() => {
    const base =
      this.variant() === 'primary'
        ? 'btn-primary'
        : this.variant() === 'secondary'
          ? 'btn-secondary'
          : 'flex items-center gap-1 text-fg-muted transition-colors hover:text-accent';
    return this.extraClass() ? `${base} ${this.extraClass()}` : base;
  });
}
