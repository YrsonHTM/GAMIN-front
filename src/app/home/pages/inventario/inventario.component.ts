import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarProductoModalComponent } from './components/agregar-producto-modal/agregar-producto-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { InventarioService } from '../../services/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { inventario } from '../../interfaces/inventario.interface';
import { Producto } from '../../interfaces/producto.interface';
import { EditarProductoModalComponent } from './components/editar-producto-modal/editar-producto-modal.component';
import { CompartirInventarioComponent } from './components/compartir-inventario/compartir-inventario.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  inventario: any = {
    nombre: 'Inventario 1',
    id: 0,
    productos: [
    ]
  };

  columnas: string[] = ['nombre', 'descripcion', 'cantidad','precio', 'acciones'];

  constructor(
    public dialog: MatDialog,
    private inventarioService: InventarioService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {

    this.getInventarioInfo();


  }

  ngAfterViewInit(): void {
    // Configurar el paginador
    this.dataSource.data = this.inventario.productos;
    this.dataSource.paginator = this.paginator;
  }

  verMovimientos(): void {
    const dialogRef = this.dialog.open(MovimientosComponent, {
      width: '400px',
      disableClose: true,
      data: this.inventario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        this.getInventarioInfo();
        console.log('Producto agregado');
      } else {
        // Lógica para cancelar
        console.log('Agregar producto cancelado');
      }
    });
  }

  getInventarioInfo(): void{

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.inventarioService.getInventario(id).subscribe(
        (res: inventario) => {
          this.inventario.id = res.inventario_id;
          this.inventario.nombre = res.nombre;
          this.dataSource.data = this.inventario.productos;
          this.dataSource.paginator = this.paginator;
        }
      );

      this.inventarioService.getProductos(id).subscribe(
        (res: Producto[]) => {
          this.inventario.productos = res;
          console.log(res)
          this.dataSource.data = this.inventario.productos;
          this.dataSource.paginator = this.paginator;
        }
        
      );

    });

  }

  compartirInventario(): void {
    const dialogRef = this.dialog.open(CompartirInventarioComponent, {
      width: '400px',
      disableClose: true,
      data: this.inventario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        this.getInventarioInfo();
        console.log('Producto agregado');
      } else {
        // Lógica para cancelar
        console.log('Agregar producto cancelado');
      }
    });
  }

  agregarProducto(): void {
    const dialogRef = this.dialog.open(AgregarProductoModalComponent, {
      width: '400px',
      disableClose: true,
      data: this.inventario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        this.getInventarioInfo();
        console.log('Producto agregado');
      } else {
        // Lógica para cancelar
        console.log('Agregar producto cancelado');
      }
    });
  }

  eliminarProducto(producto: any): void {
    // Aquí puedes implementar la lógica para eliminar un producto del inventario
    this.inventarioService.deleteProductoInv(producto.inventario_producto_id).subscribe(
      (res: any) => {
        console.log(res);
        this.snackBar.open('Producto eliminado', 'Cerrar', {
          duration: 3000
        });
        this.getInventarioInfo();
      },
      (err: any) => {
        this.snackBar.open('Error al eliminar el producto', 'Cerrar', {
          duration: 3000
        });
        console.log(err);
      }
    );
    console.log('Eliminar producto', producto);
  }

  editarProducto(producto: any): void {
    const dialogRef = this.dialog.open(EditarProductoModalComponent, {
      width: '400px',
      disableClose: true,
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'agregar') {
        // Lógica para agregar el producto
        this.getInventarioInfo();
        console.log('Producto agregado');
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
