import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarProductoModalComponent } from './components/agregar-producto-modal/agregar-producto-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  inventario: any = {
    nombre: 'Inventario 1',
    productos: [
      { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', cantidad: 10 },
      { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', cantidad: 5 },
      { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', cantidad: 2 }
    ]
  };

  columnas: string[] = ['nombre', 'descripcion', 'cantidad', 'acciones'];

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    // Configurar el paginador
    this.dataSource.data = this.inventario.productos;
    this.dataSource.paginator = this.paginator;
  }

  agregarProducto(): void {
    const dialogRef = this.dialog.open(AgregarProductoModalComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        console.log('Producto agregado');
      } else {
        // Lógica para cancelar
        console.log('Agregar producto cancelado');
      }
    });
  }

  eliminarProducto(producto: any): void {
    // Aquí puedes implementar la lógica para eliminar un producto del inventario
    console.log('Eliminar producto', producto.nombre);
  }

  verProducto(producto: any): void {
    // Aquí puedes implementar la lógica para ver los detalles de un producto
    console.log('Ver producto', producto.nombre);
  }
}
