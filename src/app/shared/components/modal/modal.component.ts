import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Input() title: string = 'Confirmar';
  @Input() body: string | TemplateRef<any> = '';
  @Input() confirmText: string = 'Aceptar';
  @Input() cancelText: string = 'Cancelar';

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  confirm() {
    this.confirmed.emit();
  }

  isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  get bodyTemplate(): TemplateRef<any> | null {
  return this.isString(this.body) ? null : this.body;
}
}
