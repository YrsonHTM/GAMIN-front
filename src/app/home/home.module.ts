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


@NgModule({
  declarations: [
    LateralComponent,
    HomeComponent,
    CrearInventarioComponent,
    ToggleNavComponent,
    InventarioComponent,
    AgregarProductoModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
