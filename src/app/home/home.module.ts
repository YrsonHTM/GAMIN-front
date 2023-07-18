import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LateralComponent } from './lateral/lateral.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { CrearInventarioComponent } from './pages/crear-inventario/crear-inventario.component';
import { FormsModule } from '@angular/forms';
import { ToggleNavComponent } from './pages/toggle-nav/toggle-nav.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { AgregarProductoModalComponent } from './pages/inventario/components/agregar-producto-modal/agregar-producto-modal.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AgregarNuevoProductoComponent } from './pages/inventario/components/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { EditarNuevoProductoComponent } from './pages/inventario/components/editar-nuevo-producto/editar-nuevo-producto.component';
import { EditarProductoModalComponent } from './pages/inventario/components/editar-producto-modal/editar-producto-modal.component';
import { CompartirInventarioComponent } from './pages/inventario/components/compartir-inventario/compartir-inventario.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';
import { AgregarProvedorComponent } from './pages/provedores/components/agregar-provedor/agregar-provedor.component';
import { EditarProvedorComponent } from './pages/provedores/components/editar-provedor/editar-provedor.component';
import { MovimientosComponent } from './pages/inventario/components/movimientos/movimientos.component';


@NgModule({
  declarations: [
    LateralComponent,
    HomeComponent,
    CrearInventarioComponent,
    ToggleNavComponent,
    InventarioComponent,
    AgregarProductoModalComponent,
    ProductosComponent,
    AgregarNuevoProductoComponent,
    EditarNuevoProductoComponent,
    EditarProductoModalComponent,
    CompartirInventarioComponent,
    ProvedoresComponent,
    AgregarProvedorComponent,
    EditarProvedorComponent,
    MovimientosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
