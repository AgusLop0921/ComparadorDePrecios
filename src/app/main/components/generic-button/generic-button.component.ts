import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent {
  @Input() text: string = 'Botón';
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output() btnClick = new EventEmitter<void>();

  get buttonClass(): string {
    switch (this.type) {
      case 'secondary':
        return 'btn btn-outline-secondary';
      case 'tertiary':
        return 'btn btn-link';
      default:
        return 'btn btn-primary';
    }
  }

  handleClick(): void {
    if (!this.disabled && !this.loading) {
      this.btnClick.emit();
    }
  }
}
