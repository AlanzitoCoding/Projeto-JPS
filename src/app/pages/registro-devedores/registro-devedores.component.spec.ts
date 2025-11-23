// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDevedoresComponent } from './registro-devedores.component';

describe('RegistroDevedoresComponent', () => {
  let component: RegistroDevedoresComponent;
  let fixture: ComponentFixture<RegistroDevedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDevedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDevedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
