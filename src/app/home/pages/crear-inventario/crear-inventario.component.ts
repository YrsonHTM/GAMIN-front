import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { InventarioService } from '../../services/inventario.service';
import { AurhService } from 'src/app/auth/services/aurh.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
    private homeService: HomeService,
    private inventarioService: InventarioService,
    private authService: AurhService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  toggleSidenav(): void {
    this.sidenavOpened.next(!this.sidenavOpened.value);
  }

  crearInventario(): void {
    // Aquí puedes implementar la lógica para crear el inventario utilizando los valores de nombreInventario y descripcionInventario
    
    this.inventarioService.crearInventario(this.authService.userId, this.nombreInventario, this.descripcionInventario).subscribe((res: any) => {
      this.snackBar.open('Inventario creado', 'Cerrar', {});
      window.location.reload();
    },
    (error)=> {
      this.snackBar.open('Error al crear inventario', 'Cerrar', {});
    });

    console.log('Crear inventario:', this.nombreInventario, this.descripcionInventario);
  }
}
