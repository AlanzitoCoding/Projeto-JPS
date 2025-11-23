// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovaVendaComponent } from './modal-nova-venda.component';

describe('ModalNovaVendaComponent', () => {
  let component: ModalNovaVendaComponent;
  let fixture: ComponentFixture<ModalNovaVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNovaVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNovaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
