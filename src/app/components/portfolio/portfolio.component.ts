import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

interface Project {
  title: string;
  category: string;
  imageColor: string;
  icon: string;
  image?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  template: `
    <section id="portfolio" class="py-20 bg-surface">
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
              class="fade-up group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border cursor-pointer"
              [style.transition-delay]="i * 100 + 'ms'"
            >
              <!-- Project Image Placeholder -->
              <div
                class="h-48 flex items-center justify-center relative overflow-hidden"
                [style.background]="project.image ? '#1a1f2e' : project.imageColor"
              >
                @if (project.image) {
                  <img [src]="project.image" [alt]="project.title" class="w-full h-full object-contain p-3" />
                } @else {
                  <!-- Placeholder illustré selon le thème -->
                  <div class="w-full h-full flex items-center justify-center p-4">
                    @switch (project.icon) {
                      @case ('shopping-bag') {
                        <!-- Site E-commerce -->
                        <div class="relative w-full h-full flex items-center justify-center">
                          <div class="absolute top-3 left-3 w-10 h-8 bg-white/10 rounded"></div>
                          <div class="absolute top-3 right-3 w-8 h-8 bg-white/10 rounded-full"></div>
                          <div class="absolute bottom-4 left-3 right-3 flex gap-2">
                            <div class="flex-1 h-16 bg-white/10 rounded-lg"></div>
                            <div class="flex-1 h-16 bg-white/10 rounded-lg"></div>
                            <div class="flex-1 h-16 bg-white/10 rounded-lg"></div>
                          </div>
                          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                            <app-svg-icon [name]="project.icon" className="text-white" [size]="28"></app-svg-icon>
                          </div>
                        </div>
                      }
                      @case ('briefcase') {
                        <!-- Portfolio Entreprise -->
                        <div class="relative w-full h-full flex items-center justify-center">
                          <div class="absolute top-3 left-3 right-3 h-5 bg-white/10 rounded-t-lg"></div>
                          <div class="absolute top-8 left-3 right-3 bottom-3 bg-white/5 rounded-b-lg border border-white/10"></div>
                          <div class="absolute top-12 left-6 right-6 space-y-2">
                            <div class="h-2 bg-white/20 rounded w-3/4"></div>
                            <div class="h-2 bg-white/15 rounded w-full"></div>
                            <div class="h-2 bg-white/15 rounded w-5/6"></div>
                            <div class="h-2 bg-white/10 rounded w-2/3"></div>
                          </div>
                          <div class="absolute top-14 right-6 w-12 h-8 bg-primary/40 rounded flex items-center justify-center">
                            <app-svg-icon [name]="project.icon" className="text-white" [size]="18"></app-svg-icon>
                          </div>
                        </div>
                      }
                      @case ('palette') {
                        <!-- Identité Visuelle -->
                        <div class="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 120 120" class="w-full h-full max-w-[140px]">
                            <circle cx="40" cy="40" r="28" fill="rgba(255,255,255,0.15)"/>
                            <circle cx="75" cy="35" r="18" fill="rgba(255,255,255,0.2)"/>
                            <circle cx="50" cy="75" r="22" fill="rgba(255,255,255,0.1)"/>
                            <circle cx="85" cy="70" r="14" fill="rgba(255,255,255,0.25)"/>
                            <circle cx="30" cy="90" r="10" fill="rgba(255,255,255,0.15)"/>
                            <circle cx="65" cy="55" r="8" fill="#D66610" opacity="0.6"/>
                            <circle cx="90" cy="45" r="6" fill="#EA8C43" opacity="0.7"/>
                            <circle cx="45" cy="65" r="5" fill="#FF9800" opacity="0.5"/>
                          </svg>
                          <div class="absolute bottom-3 right-3">
                            <app-svg-icon [name]="project.icon" className="text-white/70" [size]="24"></app-svg-icon>
                          </div>
                        </div>
                      }
                      @case ('image') {
                        <!-- Affiches Publicitaires -->
                        <div class="relative w-full h-full flex items-center justify-center">
                          <div class="absolute top-3 left-4 w-16 h-20 bg-white/10 rounded shadow-lg rotate-[-6deg]"></div>
                          <div class="absolute top-4 left-6 w-16 h-20 bg-white/15 rounded shadow-lg flex items-center justify-center">
                            <div class="w-8 h-8 border-2 border-white/30 rounded"></div>
                          </div>
                          <div class="absolute top-3 right-4 w-16 h-20 bg-white/10 rounded shadow-lg rotate-[4deg]"></div>
                          <div class="absolute top-4 right-5 w-16 h-20 bg-white/15 rounded shadow-lg"></div>
                          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-3 bg-white/20 rounded-full"></div>
                          <div class="absolute bottom-3 right-3">
                            <app-svg-icon [name]="project.icon" className="text-white/60" [size]="22"></app-svg-icon>
                          </div>
                        </div>
                      }
                      @default {
                        <app-svg-icon [name]="project.icon" className="text-white/80" [size]="48"></app-svg-icon>
                      }
                    }
                  </div>
                }
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
      imageColor: 'linear-gradient(135deg, #D66610, #EA8C43)',
      icon: 'shopping-cart',
      image: 'assets/images/Marcheexpress.png',
    },
    {
      title: 'Site E-commerce',
      category: 'Développement Web',
      imageColor: 'linear-gradient(135deg, #C25A0E, #D66610)',
      icon: 'shopping-bag',
      image: 'assets/images/site-ecommerce.jpg',
    },
    {
      title: 'Portfolio Entreprise',
      category: 'Design & Web',
      imageColor: 'linear-gradient(135deg, #A9520A, #D66610)',
      icon: 'briefcase',
      image: 'assets/images/design.jpg',
    },
    {
      title: 'Identité Visuelle',
      category: 'Design Graphique',
      imageColor: 'linear-gradient(135deg, #D66610, #EA8C43)',
      icon: 'palette',
      image: 'assets/images/design_graphique.jpg',
    },
    {
      title: 'Affiches Publicitaires',
      category: 'Impression',
      imageColor: 'linear-gradient(135deg, #C25A0E, #EA8C43)',
      icon: 'image',
      image: 'assets/images/branding.jpg',
    },
  ];
}
