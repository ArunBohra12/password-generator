import { Injectable } from '@angular/core';
import {
  LOWERCASE_LETTERS,
  NUMBERS,
  SYMBOLS,
  UPPERCASE_LETTERS,
} from './password-generation.constants';

export type PasswordConfigType = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class PasswordGeneratorService {
  private generatedPassword = '';

  private passwordConfig: PasswordConfigType = {
    length: 10,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  };

  get password() {
    return this.generatedPassword;
  }

  get passwordGeneratorConfig() {
    return this.passwordConfig;
  }

  private getRandomArrayValue<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  private randomizeString(password: string) {
    const indices = Array.from({ length: password.length }, (_, i) => i);

    let newPassword = '';

    while (indices.length) {
      const randomIndex = Math.floor(Math.random() * indices.length);
      newPassword += password[indices[randomIndex]];

      indices.splice(randomIndex, 1);
    }

    return newPassword;
  }

  public updatePasswordGeneratorConfig<
    K extends keyof PasswordConfigType,
  >(config: { key: K; value: PasswordConfigType[K] }) {
    this.passwordConfig[config.key] = config.value;
  }

  public generatePassword() {
    const passwordConfig = this.passwordConfig;
    let password = '';

    if (
      !passwordConfig.uppercase &&
      !passwordConfig.lowercase &&
      !passwordConfig.symbols &&
      !passwordConfig.symbols
    ) {
      this.generatedPassword = '';
      return;
    }

    while (password.length <= passwordConfig.length) {
      if (
        passwordConfig.uppercase &&
        password.length <= passwordConfig.length
      ) {
        password += this.getRandomArrayValue(UPPERCASE_LETTERS);
      }

      if (
        passwordConfig.lowercase &&
        password.length <= passwordConfig.length
      ) {
        password += this.getRandomArrayValue(LOWERCASE_LETTERS);
      }

      if (passwordConfig.numbers && password.length <= passwordConfig.length) {
        password += this.getRandomArrayValue(NUMBERS);
      }

      if (passwordConfig.symbols && password.length <= passwordConfig.length) {
        password += this.getRandomArrayValue(SYMBOLS);
      }
    }

    this.generatedPassword = this.randomizeString(password);
  }
}
