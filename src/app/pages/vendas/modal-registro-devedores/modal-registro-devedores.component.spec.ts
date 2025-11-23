// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroDevedoresComponent } from './modal-registro-devedores.component';

describe('ModalRegistroDevedoresComponent', () => {
  let component: ModalRegistroDevedoresComponent;
  let fixture: ComponentFixture<ModalRegistroDevedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistroDevedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistroDevedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
