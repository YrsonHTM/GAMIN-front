import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventarioService } from 'src/app/home/services/inventario.service';

@Component({
  selector: 'app-agregar-nuevo-producto',
  templateUrl: './agregar-nuevo-producto.component.html',
  styleUrls: ['./agregar-nuevo-producto.component.scss']
})
export class AgregarNuevoProductoComponent {

  producto: any = {
    nombre: '',
    descripcion: '',
    precio: 0
  };

  constructor(
    private dialogRef: MatDialogRef<AgregarNuevoProductoComponent>,
    private inventarioService: InventarioService,
    private snackBar: MatSnackBar
    ) {}

  agregarProducto(): void {
    // Validar el formulario antes de agregar el producto
    if (this.producto.nombre && this.producto.descripcion) {

      this.inventarioService.createProducto(this.producto.nombre,this.producto.descripcion,this.producto.precio).subscribe(
        (res) => {
          console.log(res);
          this.snackBar.open('Producto agregado', 'Cerrar', {
            duration: 3000
          });
        this.dialogRef.close('agregar');

        },
        (err) => {
          console.log(err);
          this.snackBar.open('Error al agregar el producto', 'Cerrar', {
            duration: 3000
          });
          this.dialogRef.close('agregar');

        }
      );

    }
  }

  cancelar(): void {
    // Cerrar el modal sin agregar el producto
    this.dialogRef.close();
  }

}
