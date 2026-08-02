import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  template: `
    <section id="services" class="py-20 bg-gray-light">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16 fade-up">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
            NOS <span class="text-primary">SERVICES</span>
          </h2>
          <p class="text-gray-text max-w-2xl mx-auto text-lg">
            Nous proposons une gamme complète de services digitaux pour répondre à tous vos besoins.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services; track service.title; let i = $index) {
            <div
              class="fade-up bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-50"
              [style.transition-delay]="i * 100 + 'ms'"
            >
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <app-svg-icon [name]="service.icon" className="text-primary" [size]="28"></app-svg-icon>
              </div>
              <h3 class="text-xl font-bold text-dark mb-3">{{ service.title }}</h3>
              <p class="text-gray-text leading-relaxed">{{ service.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'globe',
      title: 'Développement Web',
      description: 'Sites vitrines, e-commerce et plateformes web sur mesure avec les dernières technologies.',
    },
    {
      icon: 'smartphone',
      title: 'Applications Mobiles',
      description: 'Applications Android et iOS natives ou cross-platform pour atteindre vos utilisateurs.',
    },
    {
      icon: 'pen-tool',
      title: 'Design Graphique',
      description: "Création visuelle, UI/UX design, identité de marque et charte graphique complète.",
    },
    {
      icon: 'printer',
      title: 'Impression Numérique',
      description: "Impression tous formats : cartes de visite, flyers, affiches, banderoles et goodies.",
    },
    {
      icon: 'megaphone',
      title: 'Marketing Digital',
      description: 'SEO, publicité en ligne, réseaux sociaux et stratégie de contenu pour votre croissance.',
    },
    {
      icon: 'cloud',
      title: 'Maintenance & Hébergement',
      description: 'Maintenance continue, sécurité renforcée et hébergement fiable pour vos solutions.',
    },
  ];
}
