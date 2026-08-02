import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#0D47A1] text-white py-10">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div class="flex flex-col leading-tight">
              <span class="font-extrabold text-sm tracking-wide">DIGITAL</span>
              <span class="font-extrabold text-sm tracking-wide">EXPRESS</span>
            </div>
          </div>

          <!-- Copyright -->
          <p class="text-white/60 text-sm text-center">
            &copy; {{ currentYear }} Digital Express. Tous droits réservés.
          </p>

          <!-- Links -->
          <div class="flex items-center gap-6 text-sm">
            <a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Mentions légales</a>
            <a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" class="text-white/60 hover:text-white transition-colors duration-300">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
