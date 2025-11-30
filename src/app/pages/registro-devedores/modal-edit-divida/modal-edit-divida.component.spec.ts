// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDividaComponent } from './modal-edit-divida.component';

describe('ModalEditDividaComponent', () => {
  let component: ModalEditDividaComponent;
  let fixture: ComponentFixture<ModalEditDividaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditDividaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditDividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
