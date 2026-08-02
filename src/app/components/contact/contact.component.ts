import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SvgIconComponent],
  template: `
    <section id="contact" class="py-20 bg-primary relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-white/3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/3 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left: Contact Info -->
          <div class="fade-up text-white">
            <h2 class="text-3xl lg:text-4xl font-extrabold mb-4">
              CONTACTEZ-<span class="text-white">NOUS</span>
            </h2>
            <p class="text-white/70 text-lg mb-10 leading-relaxed max-w-md">
              Une question ? Un projet ? N'hésitez pas à nous contacter. Notre équipe vous répondra dans les plus brefs délais.
            </p>

            <!-- Contact Details -->
            <div class="space-y-6 mb-10">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <app-svg-icon name="phone" [size]="22"></app-svg-icon>
                </div>
                <div>
                  <div class="text-white/60 text-sm">Téléphone</div>
                  <div class="font-semibold">+227 XX XX XX XX</div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <app-svg-icon name="mail" [size]="22"></app-svg-icon>
                </div>
                <div>
                  <div class="text-white/60 text-sm">Email</div>
                  <div class="font-semibold">contact&#64;digitalexpress.com</div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <app-svg-icon name="map-pin" [size]="22"></app-svg-icon>
                </div>
                <div>
                  <div class="text-white/60 text-sm">Localisation</div>
                  <div class="font-semibold">Niger & Canada</div>
                </div>
              </div>
            </div>

            <!-- Social Media Icons -->
            <div class="flex items-center gap-4">
              <a href="#" class="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-colors duration-300" aria-label="Facebook">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-colors duration-300" aria-label="LinkedIn">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-colors duration-300" aria-label="Instagram">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="#" class="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition-colors duration-300" aria-label="WhatsApp">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <!-- Right: Form + World Map -->
          <div class="fade-up relative">
            <!-- World Map Illustration -->
            <div class="absolute -top-6 -right-6 w-48 h-48 opacity-20 hidden lg:block">
              <svg viewBox="0 0 200 120" class="w-full h-full">
                <!-- Dotted world map outline -->
                <ellipse cx="100" cy="60" rx="85" ry="50" fill="none" stroke="white" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.8"/>
                <ellipse cx="100" cy="60" rx="55" ry="35" fill="none" stroke="white" stroke-width="0.8" stroke-dasharray="3 5" opacity="0.5"/>
                <!-- Continents simplified -->
                <path d="M45 30 Q55 25 65 30 Q70 35 60 40 Q50 42 45 38 Z" fill="white" opacity="0.4"/>
                <path d="M70 25 Q85 20 100 28 Q95 35 80 32 Z" fill="white" opacity="0.4"/>
                <path d="M110 25 Q130 20 145 28 Q140 35 120 38 Q105 35 110 28 Z" fill="white" opacity="0.4"/>
                <path d="M140 35 Q155 40 150 50 Q140 52 135 45 Z" fill="white" opacity="0.3"/>
                <path d="M50 55 Q70 48 85 55 Q80 65 60 68 Q48 62 50 55 Z" fill="white" opacity="0.4"/>
                <path d="M90 55 Q105 48 120 52 Q118 60 100 62 Z" fill="white" opacity="0.3"/>
                <path d="M35 65 Q50 58 60 68 Q50 78 38 75 Z" fill="white" opacity="0.3"/>
                <!-- Orange markers -->
                <circle cx="65" cy="35" r="3" fill="#FF9800"/>
                <circle cx="120" cy="30" r="2.5" fill="#FF9800"/>
                <circle cx="145" cy="55" r="2" fill="#FF9800"/>
                <circle cx="55" cy="70" r="2.5" fill="#FF9800"/>
                <circle cx="100" cy="58" r="3" fill="#FF9800"/>
              </svg>
            </div>

            <!-- Form -->
            <div class="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 class="text-xl font-bold text-dark mb-6">Envoyez-nous un message</h3>
              <form (ngSubmit)="onSubmit()" class="space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-dark mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    [(ngModel)]="formData.name"
                    name="name"
                    placeholder="Votre nom"
                    class="w-full px-4 py-3 bg-gray-light border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 text-dark placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-dark mb-1.5">Email</label>
                  <input
                    type="email"
                    [(ngModel)]="formData.email"
                    name="email"
                    placeholder="votre@email.com"
                    class="w-full px-4 py-3 bg-gray-light border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 text-dark placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-dark mb-1.5">Message</label>
                  <textarea
                    [(ngModel)]="formData.message"
                    name="message"
                    rows="4"
                    placeholder="Décrivez votre projet..."
                    class="w-full px-4 py-3 bg-gray-light border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 text-dark placeholder:text-gray-400 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full flex items-center justify-center gap-2 bg-primary-dark text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#0D47A1] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  ENVOYER LE MESSAGE
                  <app-svg-icon name="send" [size]="18"></app-svg-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      alert('Merci ! Votre message a été envoyé avec succès. Nous vous contacterons très bientôt.');
      this.formData = { name: '', email: '', message: '' };
    }
  }
}
