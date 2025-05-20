import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericButtonComponent } from './generic-button.component';
import { By } from '@angular/platform-browser';

describe('GenericButtonComponent', () => {
  let component: GenericButtonComponent;
  let fixture: ComponentFixture<GenericButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericButtonComponent);
    component = fixture.componentInstance;
  });

  it('debería mostrar el texto del botón', () => {
    component.text = 'Confirmar';
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btn.textContent).toContain('Confirmar');
  });

  it('debería aplicar la clase btn-primary por defecto', () => {
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.classList).toContain('btn-primary');
  });

  it('debería aplicar clase según el tipo', () => {
    component.type = 'secondary';
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.classList).toContain('btn-outline-secondary');

    component.type = 'tertiary';
    fixture.detectChanges();
    expect(btn.nativeElement.classList).toContain('btn-link');
  });

  it('debería estar deshabilitado si disabled=true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.disabled).toBeTrue();
  });

  it('debería estar deshabilitado si loading=true', () => {
    component.loading = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.disabled).toBeTrue();
  });

  it('debería mostrar spinner si loading=true', () => {
    component.loading = true;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.spinner-border'));
    expect(spinner).toBeTruthy();
  });

  it('debería emitir btnClick al hacer click si está activo', () => {
    spyOn(component.btnClick, 'emit');
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click');
    expect(component.btnClick.emit).toHaveBeenCalled();
  });

  it('no debería emitir btnClick si está deshabilitado', () => {
    component.disabled = true;
    spyOn(component.btnClick, 'emit');
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click');
    expect(component.btnClick.emit).not.toHaveBeenCalled();
  });

  it('no debería emitir btnClick si está cargando', () => {
    component.loading = true;
    spyOn(component.btnClick, 'emit');
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click');
    expect(component.btnClick.emit).not.toHaveBeenCalled();
  });
});
