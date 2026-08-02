import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300"
      [class.shadow-md]="scrolled"
    >
      <div class="container-custom flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 no-underline">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <app-svg-icon name="globe" [size]="24" className="text-white"></app-svg-icon>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-primary font-extrabold text-base tracking-wide">DIGITAL</span>
            <span class="text-primary font-extrabold text-base tracking-wide">EXPRESS</span>
          </div>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex items-center gap-8">
          @for (item of menuItems; track item.label) {
            <a
              [href]="item.link"
              class="relative text-[15px] font-medium transition-colors duration-300 py-1"
              [class.text-primary]="item.active"
              [class.text-gray-text]="!item.active"
              [class.hover:text-primary]="!item.active"
            >
              {{ item.label }}
              @if (item.active) {
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></span>
              }
            </a>
          }
        </nav>

        <!-- CTA Button Desktop -->
        <a
          href="#contact"
          class="hidden lg:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          DEMANDER UN DEVIS
          <app-svg-icon name="arrow-right" [size]="16"></app-svg-icon>
        </a>

        <!-- Mobile Menu Button -->
        <button class="lg:hidden text-dark p-2" (click)="mobileMenuOpen = !mobileMenuOpen" aria-label="Menu">
          <app-svg-icon [name]="mobileMenuOpen ? 'x' : 'menu'" [size]="24"></app-svg-icon>
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (mobileMenuOpen) {
        <div class="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav class="flex flex-col py-4 px-6 gap-3">
            @for (item of menuItems; track item.label) {
              <a
                [href]="item.link"
                class="text-[15px] font-medium py-2 transition-colors duration-300"
                [class.text-primary]="item.active"
                [class.text-gray-text]="!item.active"
                [class.hover:text-primary]="!item.active"
                (click)="mobileMenuOpen = false"
              >
                {{ item.label }}
              </a>
            }
            <a
              href="#contact"
              class="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all duration-300 mt-2"
              (click)="mobileMenuOpen = false"
            >
              DEMANDER UN DEVIS
              <app-svg-icon name="arrow-right" [size]="16"></app-svg-icon>
            </a>
          </nav>
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  scrolled = false;
  mobileMenuOpen = false;

  menuItems = [
    { label: 'Accueil', link: '#hero', active: true },
    { label: 'Services', link: '#services', active: false },
    { label: 'Réalisations', link: '#portfolio', active: false },
    { label: 'À propos', link: '#about', active: false },
    { label: 'Contact', link: '#contact', active: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }
}
