import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

interface Stat {
  icon: string;
  value: string;
  label: string;
  flags?: boolean;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <section id="about" class="py-20 bg-gray-light relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Text -->
          <div class="fade-up text-white">
            <h2 class="text-3xl lg:text-4xl font-extrabold mb-4">
              POURQUOI NOUS CHOISIR ?
            </h2>
            <p class="text-white/80 text-lg leading-relaxed max-w-lg">
              Nous combinons expertise technique, créativité et engagement pour offrir des solutions digitales qui dépassent vos attentes. Notre équipe au Niger et au Canada travaille en synergie pour vous servir.
            </p>
          </div>

          <!-- Right: Stats -->
          <div class="fade-up grid grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Stat 1 -->
            <div class="text-center text-white">
              <div class="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                <app-svg-icon name="check-circle" [size]="26"></app-svg-icon>
              </div>
              <div class="text-3xl font-extrabold mb-1">+100</div>
              <div class="text-white/70 text-sm leading-tight">Projets<br />réalisés</div>
            </div>

            <!-- Stat 2 -->
            <div class="text-center text-white">
              <div class="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                <app-svg-icon name="clock" [size]="26"></app-svg-icon>
              </div>
              <div class="text-3xl font-extrabold mb-1">100%</div>
              <div class="text-white/70 text-sm leading-tight">Respect<br />des délais</div>
            </div>

            <!-- Stat 3 -->
            <div class="text-center text-white">
              <div class="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                <app-svg-icon name="users" [size]="26"></app-svg-icon>
              </div>
              <div class="text-lg font-extrabold mb-1 leading-tight">Équipe</div>
              <div class="text-white/70 text-sm leading-tight mb-2">Niger & Canada</div>
              <!-- Flags -->
              <div class="flex items-center justify-center gap-2">
                <div class="w-8 h-5 rounded-sm overflow-hidden shadow">
                  <svg viewBox="0 0 3 2" class="w-full h-full">
                    <rect width="3" height="0.67" fill="#E05206"/>
                    <rect y="0.67" width="3" height="0.67" fill="#FFFFFF"/>
                    <rect y="1.33" width="3" height="0.67" fill="#0DB02B"/>
                    <circle cx="1.5" cy="1" r="0.28" fill="#E05206"/>
                  </svg>
                </div>
                <div class="w-8 h-5 rounded-sm overflow-hidden shadow">
                  <svg viewBox="0 0 3 2" class="w-full h-full">
                    <rect width="0.75" height="2" fill="#FF0000"/>
                    <rect x="0.75" width="1.5" height="2" fill="#FFFFFF"/>
                    <rect x="2.25" width="0.75" height="2" fill="#FF0000"/>
                    <path d="M1.5 0.55 L1.58 0.75 L1.8 0.75 L1.63 0.87 L1.7 1.07 L1.5 0.95 L1.3 1.07 L1.37 0.87 L1.2 0.75 L1.42 0.75 Z" fill="#FF0000" transform="scale(0.6) translate(1, 0.65)"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Stat 4 -->
            <div class="text-center text-white">
              <div class="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                <app-svg-icon name="headphones" [size]="26"></app-svg-icon>
              </div>
              <div class="text-3xl font-extrabold mb-1">24/7</div>
              <div class="text-white/70 text-sm leading-tight">Support<br />client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WhyChooseUsComponent {}
