import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-input.component.html',
})
export class CheckboxInputComponent {
  @Input() label = '';
  @Input() id = '';
  @Output() change = new EventEmitter<{ key: string; value: boolean }>();

  private isChecked = false;

  get checked() {
    return this.isChecked;
  }

  toggleIsChecked() {
    this.isChecked = !this.isChecked;
    this.change.emit({ key: this.id, value: this.checked });
  }
}
