import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [ModalComponent],
  template: `
    <app-modal
      [visible]="visible"
      [title]="title"
      [body]="body"
      [confirmText]="confirmText"
      [cancelText]="cancelText"
      (closed)="onClosed()"
      (confirmed)="onConfirmed()"
    ></app-modal>

    <ng-template #customBody>Contenido personalizado</ng-template>
  `,
})
class TestHostComponent {
  visible = true;
  title = 'Modal Title';
  confirmText = 'Sí';
  cancelText = 'No';
  body: string | TemplateRef<any> = 'Texto plano';

  @ViewChild('customBody', { static: true }) customBodyTemplate!: TemplateRef<any>;

  closed = false;
  confirmed = false;

  onClosed() {
    this.closed = true;
  }

  onConfirmed() {
    this.confirmed = true;
  }
}

describe('ModalComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el título', () => {
    const titleEl = fixture.debugElement.query(By.css('.modal-title')).nativeElement;
    expect(titleEl.textContent).toContain('Modal Title');
  });

  it('debería mostrar el body como texto', () => {
    const bodyEl = fixture.debugElement.query(By.css('.modal-body')).nativeElement;
    expect(bodyEl.textContent).toContain('Texto plano');
  });

  it('debería mostrar contenido del TemplateRef', () => {
    hostComponent.body = hostComponent.customBodyTemplate;
    fixture.detectChanges();

    const bodyEl = fixture.debugElement.query(By.css('.modal-body')).nativeElement;
    expect(bodyEl.textContent).toContain('Contenido personalizado');
  });

  it('debería emitir "confirmed" al hacer click en Aceptar', () => {
    const confirmBtn = fixture.debugElement.queryAll(By.css('.modal-footer button'))[1];
    confirmBtn.triggerEventHandler('click');
    expect(hostComponent.confirmed).toBeTrue();
  });

  it('debería emitir "closed" al hacer click en Cancelar', () => {
    const cancelBtn = fixture.debugElement.queryAll(By.css('.modal-footer button'))[0];
    cancelBtn.triggerEventHandler('click');
    expect(hostComponent.closed).toBeTrue();
  });

  it('no debería mostrar el modal si visible=false', () => {
    hostComponent.visible = false;
    fixture.detectChanges();

    const modal = fixture.debugElement.query(By.css('.modal'));
    expect(modal).toBeNull();
  });
});
