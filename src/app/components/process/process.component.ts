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
          <!-- Horizontal line (desktop only) -->
          <div class="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-primary/20"></div>

          <!-- Steps -->
          <div class="flex flex-col gap-0 lg:grid lg:grid-cols-6 lg:gap-4">
            @for (step of steps; track step.number; let i = $index) {
              <div class="relative flex lg:flex-col lg:items-center lg:text-center group">
                <!-- Vertical connector line (mobile only) -->
                @if (i < steps.length - 1) {
                  <div class="lg:hidden absolute left-[25px] top-[60px] w-0.5 bg-primary/20" style="height: calc(100% - 40px);"></div>
                }

                <!-- Circle with number -->
                <div class="relative z-10 w-[50px] h-[50px] lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center text-white font-extrabold text-xl lg:text-2xl flex-shrink-0 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300 lg:mb-5">
                  {{ step.number }}
                </div>

                <!-- Content -->
                <div class="ml-5 lg:ml-0 pb-10 lg:pb-0">
                  <h3 class="text-lg font-bold text-dark mb-1 lg:mb-2">{{ step.title }}</h3>
                  <p class="text-gray-text text-sm leading-relaxed lg:max-w-[180px]">{{ step.description }}</p>
                </div>
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
