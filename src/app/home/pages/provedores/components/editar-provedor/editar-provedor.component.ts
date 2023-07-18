import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/home/interfaces/producto.interface';
import { AgregarNuevoProductoComponent } from '../../../inventario/components/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { InventarioService } from 'src/app/home/services/inventario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AurhService } from 'src/app/auth/services/aurh.service';

@Component({
  selector: 'app-editar-provedor',
  templateUrl: './editar-provedor.component.html',
  styleUrls: ['./editar-provedor.component.scss']
})
export class EditarProvedorComponent {


  provedor: any = {
    nombre: '',
    descripcion: '',
    productId: null
  };

  productos: Producto[] = [];

  constructor(
    private dialogRef: MatDialogRef<AgregarNuevoProductoComponent>,
    private inventarioService: InventarioService,
    private snackBar: MatSnackBar,
    private authService: AurhService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  ngOnInit(): void {
    console.log(this.data)
    this.provedor.productId = this.data.producto_id;
    this.provedor.nombre = this.data.nombre_proveedor;
    this.provedor.descripcion = this.data.descripcion_proveedor;
    this.inventarioService.getAllProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        console.log(res)
      }
    );
  }

  agregarProducto(): void {
    // Validar el formulario antes de agregar el producto
    if (this.provedor.nombre && this.provedor.descripcion && this.provedor.productId) {


      this.inventarioService.updateProvedor(this.provedor.nombre, this.provedor.descripcion, this.authService.userId, this.provedor.productId, this.data.proveedor_id).subscribe(
        (res: any) => {
          this.snackBar.open('Provedor actualizado correctamente', 'Cerrar', {
            duration: 3000
          });
          this.dialogRef.close(res);
        },
        (err: any) => {
          this.snackBar.open('Error al actualizar el provedor', 'Cerrar', {
            duration: 3000
          });
        }
      );

    }
  }

  cancelar(): void {
    // Cerrar el modal sin agregar el producto
    this.dialogRef.close();
  }

}
