// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteDividaComponent } from './modal-delete-divida.component';

describe('ModalDeleteDividaComponent', () => {
  let component: ModalDeleteDividaComponent;
  let fixture: ComponentFixture<ModalDeleteDividaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDeleteDividaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteDividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
