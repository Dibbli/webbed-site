import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-bg2 px-6 py-8">
      <div class="mx-auto max-w-5xl text-center text-fg-muted">
        <p>&copy; {{ currentYear }} {{ profile().name }}. Built with Angular & Tailwind.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected profile = inject(DataService).profile;
  protected currentYear = new Date().getFullYear();
}
