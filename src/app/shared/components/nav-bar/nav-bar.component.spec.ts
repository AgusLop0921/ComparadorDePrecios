
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el título INDEC Precios', () => {
    const brand = fixture.debugElement.query(By.css('.navbar-brand')).nativeElement;
    expect(brand.textContent).toContain('INDEC Precios');
  });

  it('debería tener enlaces a Categorías, Carrito y Sucursales', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav-link')).map(de => de.nativeElement.textContent.trim());
    expect(links).toContain('Categorías');
    expect(links).toContain('Carrito');
    expect(links).toContain('Sucursales');
  });

  it('debería mostrar los botones de idioma ES y EN', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button')).map(de => de.nativeElement.textContent.trim());
    expect(buttons).toContain('ES');
    expect(buttons).toContain('EN');
  });
});
