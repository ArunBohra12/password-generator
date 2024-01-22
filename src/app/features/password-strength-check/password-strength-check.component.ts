import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PasswordGeneratorService } from '../../shared/service/password-generator/password-generator.service';
import { PasswordStrengthService } from '../../shared/service/password-strength/password-strength.service';

export type PasswordStrengthLevel =
  | 'none'
  | 'too-weak'
  | 'weak'
  | 'medium'
  | 'strong';

const PASSWORD_STRENGTH_CONSTANTS: {
  [key in PasswordStrengthLevel]: {
    class: string;
    text: string;
    level: number;
  };
} = {
  none: {
    class: '',
    text: '',
    level: 0,
  },
  'too-weak': {
    class: 'bg-red border-red',
    text: 'TOO WEAK!',
    level: 1,
  },
  weak: {
    class: 'bg-orange border-orange',
    text: 'WEAK',
    level: 2,
  },
  medium: {
    class: 'bg-yellow border-yellow',
    text: 'MEDIUM',
    level: 3,
  },
  strong: {
    class: 'bg-green border-green',
    text: 'STRONG',
    level: 4,
  },
};

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-password-strength-check',
  templateUrl: './password-strength-check.component.html',
})
export class PasswordStrengthCheck {
  constructor(
    public passwordGenerator: PasswordGeneratorService,
    public passwordStrengthChecker: PasswordStrengthService,
  ) {}

  get passwordStrengthText() {
    return PASSWORD_STRENGTH_CONSTANTS[
      this.passwordStrengthChecker.passwordStrength
    ].text;
  }

  passwordStrengthClass(): { class: string; count: number } {
    const strengthLevelDetails =
      PASSWORD_STRENGTH_CONSTANTS[
        this.passwordStrengthChecker.passwordStrength
      ];

    return {
      class: strengthLevelDetails.class,
      count: strengthLevelDetails.level,
    };
  }
}
