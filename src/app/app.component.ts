import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordView } from './features/password-view/password-view.component';
import { PasswordGenerationConfigComponent } from './features/password-generation-config/password-generation-config.component';
import { PasswordGeneratorService } from './shared/service/password-generator/password-generator.service';
import { PasswordStrengthCheck } from './features/password-strength-check/password-strength-check.component';
import { PasswordStrengthService } from './shared/service/password-strength/password-strength.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PasswordView,
    PasswordGenerationConfigComponent,
    PasswordStrengthCheck,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    public passwordGenerator: PasswordGeneratorService,
    public passwordStrength: PasswordStrengthService,
  ) {}

  generatePassword() {
    this.passwordGenerator.generatePassword();

    this.passwordStrength.updatePasswordStrengthLevel(
      this.passwordGenerator.passwordGeneratorConfig,
    );
  }
}
