import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, BreadcrumbComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnica';
}