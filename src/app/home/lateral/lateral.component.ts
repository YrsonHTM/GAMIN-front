import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { AurhService } from 'src/app/auth/services/aurh.service';
import { InventarioService } from '../services/inventario.service';
import { inventario } from '../interfaces/inventario.interface';
import { CreatedInventory, ResInventario } from '../interfaces/res-inventario.interface';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss']
})
export class LateralComponent implements OnInit {

  sidenavOpened = true;

  inventarios : CreatedInventory[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private authService: AurhService,
    private inventarioService: InventarioService
  ) { }

  ngOnInit(): void {
    this.homeService.sidenavOpened.subscribe((value: boolean) => {
      this.sidenavOpened = value;
    });

    //establecer inventarios
    this.inventarioService.getAllInventarios().subscribe(
      (res: inventario[]) => {
      res.forEach((inventario: inventario) => {
        if(inventario.usuario_id == this.authService.userId)
        {
          this.inventarios.push(inventario);
        }
      });
    });

    this.inventarioService.getInventariosByUser(this.authService.userId).subscribe(
      (res: ResInventario) => {
        this.inventarios = res.createdInventories
      }
    );

  }

  inventarioSeleccionado: any;

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  seleccionarInventario(inventario: any): void {
    this.inventarioSeleccionado = inventario;
    this.router.navigate([`/home/inventario/${inventario.inventario_id}`]);
    // Aquí puedes implementar la lógica adicional que desees realizar al seleccionar un inventario
  }

  crearNuevoInventario(): void {
    this.router.navigate(['/home/crear']);
  }

  goToProductos(): void {
    this.router.navigate(['/home/productos']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
