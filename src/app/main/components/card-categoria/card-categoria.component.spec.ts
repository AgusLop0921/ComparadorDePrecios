import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCategoriaComponent } from './card-categoria.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('CardCategoriaComponent', () => {
  let component: CardCategoriaComponent;
  let fixture: ComponentFixture<CardCategoriaComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [CardCategoriaComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CardCategoriaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input text and image', () => {
    component.texto = 'Test Categoria';
    component.image = 'assets/test.png';
    fixture.detectChanges();

    const textEl = fixture.debugElement.query(By.css('.card-text')).nativeElement;
    const imgEl = fixture.debugElement.query(By.css('.card-img')).nativeElement;

    expect(textEl.textContent).toContain('Test Categoria');
    expect(imgEl.src).toContain('assets/test.png');
  });

  it('should navigate to ruta on click', () => {
    component.ruta = '/test';
    fixture.detectChanges();

    const cardEl = fixture.debugElement.query(By.css('.card-categoria'));
    cardEl.triggerEventHandler('click', null);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/test']);
  });

  it('should not navigate if ruta is empty', () => {
    component.ruta = '';
    fixture.detectChanges();

    const cardEl = fixture.debugElement.query(By.css('.card-categoria'));
    cardEl.triggerEventHandler('click', null);

    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});