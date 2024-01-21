import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordView } from './password-view/password-view.component';
import { PasswordGenerationConfigComponent } from './password-generation-config/password-generation-config.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PasswordView, PasswordGenerationConfigComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
