import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventarioService } from 'src/app/home/services/inventario.service';

@Component({
  selector: 'app-editar-nuevo-producto',
  templateUrl: './editar-nuevo-producto.component.html',
  styleUrls: ['./editar-nuevo-producto.component.scss']
})
export class EditarNuevoProductoComponent implements OnInit {

  producto: any = {
    nombre: '',
    descripcion: '',
    precio: 0
  };

  constructor(
    private dialogRef: MatDialogRef<EditarNuevoProductoComponent>,
    private inventarioService: InventarioService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}


  ngOnInit(): void {
    console.log(this.data)
    this.producto.nombre = this.data.nombre;
    this.producto.descripcion = this.data.descripcion;
    this.producto.precio = this.data.precio
  }

  agregarProducto(): void {
    // Validar el formulario antes de agregar el producto
    if (this.producto.nombre && this.producto.descripcion) {

      this.inventarioService.editProducto(this.data.producto_id,this.producto.nombre,this.producto.descripcion,this.producto.precio).subscribe(
        (res) => {
          this.snackBar.open('Producto editado', 'Cerrar', {});
          this.dialogRef.close('agregar');
        },
        (err) => {
          this.snackBar.open('Error al editar el producto', 'Cerrar', {});
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
