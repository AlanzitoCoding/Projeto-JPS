// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletePagamentoComponent } from './modal-delete-pagamento.component';

describe('ModalDeletePagamentoComponent', () => {
  let component: ModalDeletePagamentoComponent;
  let fixture: ComponentFixture<ModalDeletePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDeletePagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeletePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
