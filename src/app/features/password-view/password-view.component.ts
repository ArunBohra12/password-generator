import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorService } from '../../shared/service/password-generator/password-generator.service';

@Component({
  selector: 'app-password-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-view.component.html',
})
export class PasswordView {
  constructor(public passwordGeneration: PasswordGeneratorService) {}

  public showCopiedText = false;

  public toggleShowCopiedText() {
    this.showCopiedText = true;

    setTimeout(() => {
      this.showCopiedText = false;
    }, 2000);
  }

  public copyPassword() {
    navigator.clipboard.writeText(this.passwordGeneration.password);
    this.toggleShowCopiedText();
  }
}
