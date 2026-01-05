import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  imports: [NavMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-bg0/90 backdrop-blur-sm border-b border-bg2">
      <nav aria-label="Main navigation" class="mx-auto flex max-w-5xl items-center justify-end md:justify-center px-4 py-3 md:px-6 md:py-4">
        <app-nav-menu />
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
