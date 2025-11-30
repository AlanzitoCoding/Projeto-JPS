// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditVendaComponent } from './modal-edit-venda.component';

describe('ModalEditVendaComponent', () => {
  let component: ModalEditVendaComponent;
  let fixture: ComponentFixture<ModalEditVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
