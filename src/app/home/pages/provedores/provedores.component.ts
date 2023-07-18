import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventarioService } from '../../services/inventario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Provedor } from '../../interfaces/provedor.interface';
import { AgregarProvedorComponent } from './components/agregar-provedor/agregar-provedor.component';
import { EditarProvedorComponent } from './components/editar-provedor/editar-provedor.component';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.scss']
})
export class ProvedoresComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  provedores: Provedor[] = [];

  columnas: string[] = ['nombre', 'descripcion', 'acciones'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();


  constructor(
    private inventarioService: InventarioService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    //agregar productos
    this.cargarProductos();
  }

  cargarProductos(): void {

    this.inventarioService.getAllProvedores().subscribe(
      (res: Provedor[]) => {
        this.provedores = res;
        console.log(res);
        this.dataSource.data = this.provedores;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  agregarProducto(): void {
    const dialogRef = this.dialog.open(AgregarProvedorComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        this.cargarProductos();
      } else {
        // Lógica para cancelar
        console.log('Agregar producto cancelado');
      }
      this.cargarProductos();
    });
  }

  eliminarProducto(producto: any): void {
    // Aquí puedes implementar la lógica para eliminar un producto del inventario

    this.inventarioService.deleteProvedor(producto.proveedor_id).subscribe(
      (res) => {
        console.log(res);
        this.snackBar.open('Provedor eliminado', 'Cerrar', {
          duration: 3000
        });
        this.cargarProductos();
      },
      (err) => {
        console.log(err);
        this.snackBar.open(err.error.error, 'Cerrar', {
          duration: 3000
        });
      }
    );
    
  }

  editarProducto(producto: any): void {
    const dialogRef = this.dialog.open(EditarProvedorComponent, {
      width: '400px',
      disableClose: true,
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        this.cargarProductos();
      } else {
        // Lógica para cancelar
        console.log('Agregar producto cancelado');
      }
    });
  }

  verProducto(producto: any): void {
    // Aquí puedes implementar la lógica para ver los detalles de un producto
    console.log('Ver producto', producto.nombre);
  }

}
