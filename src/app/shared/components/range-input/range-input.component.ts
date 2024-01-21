import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-range-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './range-input.component.html',
  styleUrl: './range-input.component.css',
})
export class RangeInputComponent {
  @Input() inputValue: number = 10;
  @Input() minValue: number = 4;
  @Input() maxValue: number = 20;
  @Output() selectedLength = new EventEmitter<number>();

  public selectedPercentage = this.calculateSelectedPercentage();

  get value() {
    return this.inputValue;
  }

  // this is only applicable for range inputs that have increment of 1
  private calculateSelectedPercentage() {
    return (
      ((this.value - this.minValue) * 100) / (this.maxValue - this.minValue)
    );
  }

  setValue(event: Event) {
    this.inputValue = Number((event.target as HTMLInputElement).value);
    this.selectedPercentage = this.calculateSelectedPercentage();
    this.selectedLength.emit(this.value);
  }
}
