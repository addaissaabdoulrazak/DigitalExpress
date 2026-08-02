import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { ProcessComponent } from '../../components/process/process.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    WhyChooseUsComponent,
    ProcessComponent,
    ContactComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-portfolio></app-portfolio>
    <app-why-choose-us></app-why-choose-us>
    <app-process></app-process>
    <app-contact></app-contact>
  `,
})
export class HomeComponent {}
