import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

interface Project {
  title: string;
  category: string;
  imageColor: string;
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  template: `
    <section id="portfolio" class="py-20 bg-white">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16 fade-up">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
            NOS <span class="text-primary">RÉALISATIONS</span>
          </h2>
          <p class="text-gray-text max-w-2xl mx-auto text-lg">
            Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire et notre créativité.
          </p>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          @for (project of projects; track project.title; let i = $index) {
            <div
              class="fade-up group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-50 cursor-pointer"
              [style.transition-delay]="i * 100 + 'ms'"
            >
              <!-- Project Image Placeholder -->
              <div
                class="h-48 flex items-center justify-center relative overflow-hidden"
                [style.background]="project.imageColor"
              >
                <app-svg-icon [name]="project.icon" className="text-white/80" [size]="48"></app-svg-icon>
                <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300 flex items-center justify-center">
                  <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                    Voir le projet
                    <app-svg-icon name="external-link" [size]="14"></app-svg-icon>
                  </span>
                </div>
              </div>
              <!-- Project Info -->
              <div class="p-5">
                <span class="text-xs font-semibold text-primary uppercase tracking-wide">{{ project.category }}</span>
                <h3 class="text-lg font-bold text-dark mt-1">{{ project.title }}</h3>
              </div>
            </div>
          }
        </div>

        <!-- CTA Button -->
        <div class="text-center fade-up">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            VOIR PLUS DE RÉALISATIONS
            <app-svg-icon name="arrow-right" [size]="18"></app-svg-icon>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Marché Express',
      category: 'Application Mobile',
      imageColor: 'linear-gradient(135deg, #1976D2, #42A5F5)',
      icon: 'shopping-cart',
    },
    {
      title: 'Site E-commerce',
      category: 'Développement Web',
      imageColor: 'linear-gradient(135deg, #1565C0, #1E88E5)',
      icon: 'shopping-bag',
    },
    {
      title: 'Portfolio Entreprise',
      category: 'Design & Web',
      imageColor: 'linear-gradient(135deg, #0D47A1, #1976D2)',
      icon: 'briefcase',
    },
    {
      title: 'Identité Visuelle',
      category: 'Design Graphique',
      imageColor: 'linear-gradient(135deg, #1976D2, #64B5F6)',
      icon: 'palette',
    },
    {
      title: 'Affiches Publicitaires',
      category: 'Impression',
      imageColor: 'linear-gradient(135deg, #1565C0, #42A5F5)',
      icon: 'image',
    },
  ];
}
