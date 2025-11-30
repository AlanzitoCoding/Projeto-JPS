// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteVendaComponent } from './modal-delete-venda.component';

describe('ModalDeleteVendaComponent', () => {
  let component: ModalDeleteVendaComponent;
  let fixture: ComponentFixture<ModalDeleteVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDeleteVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
