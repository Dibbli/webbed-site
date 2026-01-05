import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="md:hidden p-2 text-fg hover:text-accent transition-colors"
      (click)="open.set(!open())"
      [attr.aria-expanded]="open()"
      aria-label="Toggle navigation menu"
    >
      <i class="ph text-xl" [class.ph-list]="!open()" [class.ph-x]="open()"></i>
    </button>
    <div
      class="absolute left-0 right-0 top-full grid transition-[grid-template-rows] duration-300 ease-in-out border-b border-bg2 bg-bg0/95 backdrop-blur-sm md:relative md:top-auto md:block md:border-0 md:bg-transparent md:backdrop-blur-none"
      [class.grid-rows-[0fr]]="!open()"
      [class.grid-rows-[1fr]]="open()"
      [class.border-transparent]="!open()"
    >
      <ul
        role="list"
        class="overflow-hidden px-4 py-0 md:flex md:items-center md:gap-6 md:overflow-visible md:p-0"
      >
        <li><a href="#home" (click)="open.set(false)" class="nav-link">Home</a></li>
        <li><a href="#projects" (click)="open.set(false)" class="nav-link">Projects</a></li>
        <li><a href="#experience" (click)="open.set(false)" class="nav-link">Experience</a></li>
        <li><a href="#education" (click)="open.set(false)" class="nav-link">Education</a></li>
        <li><a href="#contact" (click)="open.set(false)" class="nav-link">Contact</a></li>
      </ul>
    </div>
  `,
})
export class NavMenuComponent {
  protected open = signal(false);
}
