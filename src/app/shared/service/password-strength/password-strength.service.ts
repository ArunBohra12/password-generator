import { Injectable } from '@angular/core';
import { PasswordConfigType } from '../password-generator/password-generator.service';
import { PasswordStrengthLevel } from '../../../features/password-strength-check/password-strength-check.component';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  private passwordStrengthLevel: PasswordStrengthLevel = 'medium';

  get passwordStrength() {
    return this.passwordStrengthLevel;
  }

  public updatePasswordStrengthLevel(passwordConfig: PasswordConfigType) {
    const { length, uppercase, lowercase, numbers, symbols } = passwordConfig;
    const totalChecked = [uppercase, lowercase, numbers, symbols].filter(
      Boolean,
    ).length;

    if (length <= 8) {
      this.passwordStrengthLevel = 'too-weak';
    } else if (length < 10 && totalChecked <= 2) {
      this.passwordStrengthLevel = 'weak';
    } else if (length < 15 && totalChecked <= 2) {
      this.passwordStrengthLevel = 'medium';
    } else {
      this.passwordStrengthLevel = 'strong';
    }
  }
}
