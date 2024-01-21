import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckboxInputComponent } from '../../shared/components/checkbox-input/checkbox-input.component';
import { RangeInputComponent } from '../../shared/components/range-input/range-input.component';
import {
  PasswordConfigType,
  PasswordGeneratorService,
} from '../../shared/service/password-generator/password-generator.service';
import { PasswordStrengthService } from '../../shared/service/password-strength/password-strength.service';

type PasswordConfigCheckboxesType = {
  name: keyof PasswordConfigType;
  title: string;
}[];

@Component({
  selector: 'app-password-generation-config',
  standalone: true,
  imports: [CommonModule, CheckboxInputComponent, RangeInputComponent],
  templateUrl: './password-generation-config.component.html',
})
export class PasswordGenerationConfigComponent {
  constructor(
    public passwordGenerator: PasswordGeneratorService,
    public passwordStrength: PasswordStrengthService,
  ) {}

  public length = this.passwordGenerator.passwordGeneratorConfig.length;

  public passwordConfigCheckboxes: PasswordConfigCheckboxesType = [
    {
      name: 'uppercase',
      title: 'Include Uppercase Letters',
    },
    {
      name: 'lowercase',
      title: 'Include Lowercase Letters',
    },
    {
      name: 'numbers',
      title: 'Include Numbers',
    },
    {
      name: 'symbols',
      title: 'Include Symbols',
    },
  ];

  updatePasswordConfigFromCheckboxes(value: { key: string; value: boolean }) {
    const key = value.key as keyof PasswordConfigType;

    this.updatePasswordGeneratorConfig({
      key,
      value: value.value,
    });
  }

  updatePasswordGeneratorConfig<K extends keyof PasswordConfigType>(config: {
    key: K;
    value: PasswordConfigType[K];
  }): void {
    this.passwordGenerator.updatePasswordGeneratorConfig({
      key: config.key,
      value: config.value,
    });

    this.passwordStrength.updatePasswordStrengthLevel(
      this.passwordGenerator.passwordGeneratorConfig,
    );
  }
}
