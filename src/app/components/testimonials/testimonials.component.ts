
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-20 bg-gray-light">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16 fade-up">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
            TÉMOIGNAGES <span class="text-primary">CLIENTS</span>
          </h2>
          <p class="text-gray-text max-w-2xl mx-auto text-lg">
            Ce que nos clients disent de notre travail et de notre accompagnement.
          </p>
        </div>

        <!-- Testimonial Card -->
        <div class="fade-up max-w-3xl mx-auto">
          <div class="bg-surface-elevated rounded-2xl p-8 md:p-12 shadow-lg text-center relative">
            <!-- Quote Icon -->
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
              </svg>
            </div>

            <!-- Testimonial Text -->
            <p class="text-gray-text text-lg md:text-xl italic leading-relaxed mb-8">
              "{{ currentTestimonial.quote }}"
            </p>

            <!-- Stars -->
            <div class="flex items-center justify-center gap-1 mb-6">
              @for (star of [].constructor(currentTestimonial.stars); track $index) {
                <svg class="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#D66610"/>
                </svg>
              }
            </div>

            <!-- Author -->
            <div class="flex items-center justify-center gap-4">
              <div class="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {{ currentTestimonial.name.charAt(0) }}
              </div>
              <div class="text-left">
                <div class="font-bold text-dark">{{ currentTestimonial.name }}</div>
                <div class="text-sm text-gray-text">{{ currentTestimonial.role }} - {{ currentTestimonial.company }}</div>
              </div>
            </div>

            <!-- Carousel Controls -->
            <div class="flex items-center justify-center gap-4 mt-8">
              <button
                (click)="prev()"
                class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-text hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <div class="flex items-center gap-2">
                @for (t of testimonials; track t.name; let i = $index) {
                  <button
                    (click)="goTo(i)"
                    class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    [class.bg-primary]="i === currentIndex"
                    [class.bg-gray-600]="i !== currentIndex"
                    [class.w-8]="i === currentIndex"
                  ></button>
                }
              </div>

              <button
                (click)="next()"
                class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-text hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private intervalId: any = null;

  testimonials: Testimonial[] = [
    {
      quote: "Digital Express a transformé notre présence en ligne. Leur équipe a su comprendre nos besoins et livrer un site web exceptionnel qui a boosté notre chiffre d'affaires de 40%.",
      name: 'Sophie Martin',
      role: 'Directrice Marketing',
      company: 'TechCorp France',
      stars: 5,
    },
    {
      quote: "Un accompagnement remarquable du début à la fin. L'application mobile développée par Digital Express a dépassé toutes nos attentes. Je recommande vivement !",
      name: 'Amadou Hama',
      role: 'CEO',
      company: 'Innovatech Niger',
      stars: 5,
    },
    {
      quote: "Professionnalisme et créativité au rendez-vous. Notre nouvelle identité visuelle a complètement redynamisé notre marque. Merci à toute l'équipe !",
      name: 'Marie Koné',
      role: 'Fondatrice',
      company: 'AfrikDesign',
      stars: 5,
    },
  ];

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoPlay();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetAutoPlay();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.resetAutoPlay();
  }
}
