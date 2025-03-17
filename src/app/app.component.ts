import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ServiciosComponent } from './servicios/servicios.component';
import { AwardsComponent } from "./awards/awards.component";
import { BannerComponent } from "./banner/banner.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, BreadcrumbComponent, ServiciosComponent, AwardsComponent, BannerComponent, AboutUsComponent, TeamComponent, FaqComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnica';
}