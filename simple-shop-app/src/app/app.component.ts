import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component'; // Import NavbarComponent from the correct path

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is a standalone component
  imports: [RouterOutlet, NavbarComponent], // Add NavbarComponent to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-shop-app';
}