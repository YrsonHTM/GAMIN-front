import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss']
})
export class LateralComponent implements OnInit {

  sidenavOpened = true;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.homeService.sidenavOpened.subscribe((value: boolean) => {
      this.sidenavOpened = value;
    });
  }

  inventarios = [
    { nombre: 'Inventario 1' },
    { nombre: 'Inventario 2' },
    { nombre: 'Inventario 3' }
  ];
  inventarioSeleccionado: any;

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  seleccionarInventario(inventario: any): void {
    this.inventarioSeleccionado = inventario;
    this.router.navigate(['/home/inventario/2']);
    // Aquí puedes implementar la lógica adicional que desees realizar al seleccionar un inventario
  }

  crearNuevoInventario(): void {
    this.router.navigate(['/home/crear']);
  }

}
