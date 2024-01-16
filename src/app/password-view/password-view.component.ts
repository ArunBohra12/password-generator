import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-view.component.html',
})
export class PasswordView {
  @Input() password = '';

  public showCopiedText = false;

  public toggleShowCopiedText() {
    this.showCopiedText = true;

    setTimeout(() => {
      this.showCopiedText = false;
    }, 2000);
  }

  public copyPassword() {
    navigator.clipboard.writeText(this.password);
    this.toggleShowCopiedText();
  }
}
