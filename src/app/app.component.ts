import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordView } from './password-view/password-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PasswordView],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
