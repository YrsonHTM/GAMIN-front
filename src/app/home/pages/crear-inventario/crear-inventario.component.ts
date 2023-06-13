import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-crear-inventario',
  templateUrl: './crear-inventario.component.html',
  styleUrls: ['./crear-inventario.component.scss']
})
export class CrearInventarioComponent {
  nombreInventario?: string;
  descripcionInventario?: string;

  sidenavOpened = this.homeService.sidenavOpened

  constructor(
    private homeService: HomeService
  ) { }

  toggleSidenav(): void {
    this.sidenavOpened.next(!this.sidenavOpened.value);
  }

  crearInventario(): void {
    // Aquí puedes implementar la lógica para crear el inventario utilizando los valores de nombreInventario y descripcionInventario
    console.log('Crear inventario:', this.nombreInventario, this.descripcionInventario);
  }
}
