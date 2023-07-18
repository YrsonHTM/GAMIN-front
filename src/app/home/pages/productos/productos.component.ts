import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { Producto } from '../../interfaces/producto.interface';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProductoModalComponent } from '../inventario/components/agregar-producto-modal/agregar-producto-modal.component';
import { AgregarNuevoProductoComponent } from '../inventario/components/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EditarNuevoProductoComponent } from '../inventario/components/editar-nuevo-producto/editar-nuevo-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  productos: Producto[] = [];

  columnas: string[] = ['nombre', 'descripcion','precio', 'acciones'];

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
    this.inventarioService.getAllProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        console.log(res);
        this.dataSource.data = this.productos;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  agregarProducto(): void {
    const dialogRef = this.dialog.open(AgregarNuevoProductoComponent, {
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
    });
  }

  eliminarProducto(producto: any): void {
    // Aquí puedes implementar la lógica para eliminar un producto del inventario
    this.inventarioService.deleteProducto(producto.producto_id).subscribe(
      (res) => {
        console.log(res);
        this.snackBar.open('Producto eliminado', 'Cerrar', {
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
    const dialogRef = this.dialog.open(EditarNuevoProductoComponent, {
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
