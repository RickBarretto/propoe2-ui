import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Background } from "./background/background.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Background, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Propoe2';
}
