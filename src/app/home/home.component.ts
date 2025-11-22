import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TeamComponent } from "../team/team.component";
import { BlogComponent } from '../blog/blog.component';
import { CommissionComponent } from '../commission/commission.component';
import { FAQComponent } from '../faq/faq.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { PricingComponent } from '../pricing/pricing.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { JoinUsComponent } from "../join-us/join-us.component";
import { OurFeaturesComponent } from "../our-features/our-features.component";
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-home',
  imports: [TeamComponent, BlogComponent, CommissionComponent,WelcomeComponent, FAQComponent, NewsletterComponent, OurServicesComponent, PricingComponent, TestimonialsComponent, JoinUsComponent, OurFeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
