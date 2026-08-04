import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <section id="hero" class="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-surface overflow-hidden relative" style="background-image: url('assets/images/Acceuil.jpeg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <!-- Overlay pour garder le texte lisible -->
      <div class="absolute inset-0 bg-surface/80"></div>
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <!-- Left Column -->
          <div class="fade-up order-2 lg:order-1">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-dark leading-tight mb-6">
              DES SOLUTIONS DIGITALES<br />
              INNOVANTES POUR FAIRE<br />
              GRANDIR <span class="text-primary">VOTRE</span> ENTREPRISE
            </h1>
            <p class="text-gray-text text-lg mb-8 max-w-xl leading-relaxed">
              Digital Express est une agence digitale basée au Niger et au Canada. Nous concevons des solutions web, mobiles et marketing sur mesure pour propulser votre activité.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="#services"
                class="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                DÉCOUVRIR NOS SERVICES
                <app-svg-icon name="arrow-right" [size]="18"></app-svg-icon>
              </a>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                NOUS CONTACTER
                <app-svg-icon name="arrow-right" [size]="18"></app-svg-icon>
              </a>
            </div>
          </div>

          <!-- Right Column - Illustration -->
          <div class="fade-up order-1 lg:order-2 relative flex justify-center">
            <div class="relative w-full max-w-[550px]">
              <!-- Decorative shapes -->
              <div class="absolute -top-10 -right-6 w-64 h-64 rounded-full blur-3xl" style="background: radial-gradient(circle, #D66610, #EA8C43); opacity: 0.1;"></div>
              <div class="absolute -bottom-8 -left-4 w-56 h-56 rounded-full blur-3xl" style="background: radial-gradient(circle, #D66610, #EA8C43); opacity: 0.08;"></div>

              <!-- Main illustration container -->
              <div class="relative z-10">
                <!-- Desktop monitor -->
                <div class="relative mx-auto w-[85%]">
                  <div class="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                    <div class="bg-gray-100 px-4 py-2 flex items-center gap-1.5">
                      <span class="w-3 h-3 rounded-full bg-red-400"></span>
                      <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span class="w-3 h-3 rounded-full bg-green-400"></span>
                    </div>
                    <div class="p-5 space-y-4">
                      <div class="flex gap-3">
                        <div class="w-1/3 bg-primary/10 rounded-lg p-3">
                          <div class="h-2 bg-primary/30 rounded w-3/4 mb-2"></div>
                          <div class="text-xl font-bold text-primary">$12,450</div>
                        </div>
                        <div class="w-1/3 bg-green-50 rounded-lg p-3">
                          <div class="h-2 bg-green-200 rounded w-3/4 mb-2"></div>
                          <div class="text-xl font-bold text-green-600">+24%</div>
                        </div>
                        <div class="w-1/3 bg-primary/10 rounded-lg p-3">
                          <div class="h-2 bg-primary/30 rounded w-3/4 mb-2"></div>
                          <div class="text-xl font-bold text-primary">845</div>
                        </div>
                      </div>
                      <div class="flex items-end gap-2 h-24">
                        <div class="flex-1 bg-primary/40 rounded-t-md" style="height: 45%"></div>
                        <div class="flex-1 bg-primary/50 rounded-t-md" style="height: 65%"></div>
                        <div class="flex-1 bg-primary/60 rounded-t-md" style="height: 55%"></div>
                        <div class="flex-1 bg-primary/70 rounded-t-md" style="height: 80%"></div>
                        <div class="flex-1 bg-primary/80 rounded-t-md" style="height: 70%"></div>
                        <div class="flex-1 bg-primary rounded-t-md" style="height: 95%"></div>
                        <div class="flex-1 bg-primary/60 rounded-t-md" style="height: 50%"></div>
                      </div>
                      <svg viewBox="0 0 200 50" class="w-full h-12">
                        <polyline points="0,35 30,25 60,30 90,10 120,20 150,5 180,15 200,8" fill="none" stroke="#D66610" stroke-width="2"/>
                      </svg>
                    </div>
                  </div>
                  <div class="mx-auto w-16 h-3 bg-gray-300 rounded-b-md"></div>
                  <div class="mx-auto w-28 h-1.5 bg-gray-300 rounded-full"></div>
                </div>

                <!-- Laptop -->
                <div class="absolute -bottom-8 -left-4 w-[55%] rotate-[-4deg]">
                  <div class="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    <div class="bg-gray-100 px-3 py-1.5 flex items-center gap-1">
                      <span class="w-2 h-2 rounded-full bg-red-400"></span>
                      <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span class="w-2 h-2 rounded-full bg-green-400"></span>
                    </div>
                    <div class="p-3">
                      <div class="flex items-end gap-1.5 h-10">
                        <div class="flex-1 bg-primary/30 rounded-t-sm" style="height: 50%"></div>
                        <div class="flex-1 bg-primary/40 rounded-t-sm" style="height: 70%"></div>
                        <div class="flex-1 bg-primary/50 rounded-t-sm" style="height: 60%"></div>
                        <div class="flex-1 bg-primary rounded-t-sm" style="height: 90%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Phone -->
                <div class="absolute -bottom-4 -right-2 w-[22%] rotate-[6deg]">
                  <div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div class="bg-gray-800 h-1.5"></div>
                    <div class="p-2">
                      <div class="space-y-1.5">
                        <div class="h-1.5 bg-primary/40 rounded w-3/4"></div>
                        <div class="h-1.5 bg-gray-200 rounded"></div>
                        <div class="h-1.5 bg-gray-200 rounded w-5/6"></div>
                        <div class="flex gap-1 mt-2">
                          <div class="flex-1 h-8 bg-primary/20 rounded"></div>
                          <div class="flex-1 h-8 bg-green-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-800 h-1.5 mt-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
