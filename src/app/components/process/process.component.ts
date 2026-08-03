import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-surface">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-20 fade-up">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
            NOTRE <span class="text-primary">PROCESSUS</span> DE TRAVAIL
          </h2>
          <p class="text-gray-text max-w-2xl mx-auto text-lg">
            Une méthodologie éprouvée en 6 étapes pour garantir la réussite de chaque projet.
          </p>
        </div>

        <!-- Timeline -->
        <div class="fade-up relative">
          <!-- Horizontal line -->
          <div class="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-primary/20"></div>

          <!-- Steps Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            @for (step of steps; track step.number; let i = $index) {
              <div class="relative flex flex-col items-center text-center group">
                <!-- Circle with number -->
                <div class="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-extrabold text-2xl mb-5 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  {{ step.number }}
                </div>

                <!-- Content -->
                <h3 class="text-lg font-bold text-dark mb-2">{{ step.title }}</h3>
                <p class="text-gray-text text-sm leading-relaxed max-w-[180px]">{{ step.description }}</p>

                <!-- Connector line for mobile -->
                @if (i < steps.length - 1) {
                  <div class="lg:hidden absolute top-10 left-1/2 h-full w-0.5 bg-primary/20 -z-10"></div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProcessComponent {
  steps: Step[] = [
    {
      number: 1,
      title: 'Analyse du besoin',
      description: 'Nous écoutons et analysons vos objectifs pour définir le périmètre du projet.',
    },
    {
      number: 2,
      title: 'Conception',
      description: 'Élaboration des maquettes et de l\'architecture technique adaptée.',
    },
    {
      number: 3,
      title: 'Développement',
      description: 'Codage agile avec les meilleures technologies du marché.',
    },
    {
      number: 4,
      title: 'Tests',
      description: 'Tests rigoureux pour garantir qualité, performance et sécurité.',
    },
    {
      number: 5,
      title: 'Livraison',
      description: 'Mise en production et déploiement dans les délais convenus.',
    },
    {
      number: 6,
      title: 'Suivi',
      description: 'Maintenance continue et support pour assurer votre succès.',
    },
  ];
}
