// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditPagamentoComponent } from './modal-edit-pagamento.component';

describe('ModalEditPagamentoComponent', () => {
  let component: ModalEditPagamentoComponent;
  let fixture: ComponentFixture<ModalEditPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
