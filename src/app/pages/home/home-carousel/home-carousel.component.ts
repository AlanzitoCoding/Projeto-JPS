// Louvado seja o Senhor

import { DecimalPipe, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Clientes } from '../../../models/clientes.model';

@Component({
  selector: 'app-home-carousel',
  imports: [NgIf, DecimalPipe],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {
  @Input() clientes: Clientes = [];

  currentIndex = 0;
  intervalId: any;
  readonly intervalMs = 4000;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoplay() {
    this.intervalId = setInterval(() => this.next(), this.intervalMs);
  }

  restartAutoplay() {
    clearInterval(this.intervalId);
    this.startAutoplay();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.clientes.length;
    this.restartAutplayAfterManual();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.clientes.length) % this.clientes.length;
    this.restartAutplayAfterManual();
  }

  private restartAutplayAfterManual() {
    this.restartAutoplay();
  }
}
