// Louvado seja o Senhor 

import { Component, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../models/clientes.model';
import { tap } from 'rxjs';
import { HomeCarouselComponent } from "./home-carousel/home-carousel.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, HeaderComponent, HomeCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiService = inject(ClientesService);
  maioresDividas! : Clientes;
  carouselDisplay : string = "none";

  public ngOnInit() : void{
    this.loadMaioresDividas();
  }

  loadMaioresDividas(){
    this.apiService.showMaioresDividas()
    .pipe(tap((clientes : Clientes) => (this.maioresDividas = clientes)))
    .subscribe({
      next: (res) => {
        console.log(res);
        console.log(this.maioresDividas);
        this.showCarousel();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  showCarousel(){
    if(!this.maioresDividas){
      this.carouselDisplay = "none";
    }
    else{
      this.carouselDisplay = "flex";
    }
  }
}
