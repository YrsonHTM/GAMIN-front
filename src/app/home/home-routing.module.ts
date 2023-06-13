import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LateralComponent } from './lateral/lateral.component';
import { CrearInventarioComponent } from './pages/crear-inventario/crear-inventario.component';
import { HomeComponent } from './pages/home/home.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

const routes: Routes = [{
  path: '',
  component: LateralComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'crear',
      component: CrearInventarioComponent
    },
    {
      path: 'inventario/:id',
      component: InventarioComponent
    },
    {
      path: '**',
      redirectTo: '',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
