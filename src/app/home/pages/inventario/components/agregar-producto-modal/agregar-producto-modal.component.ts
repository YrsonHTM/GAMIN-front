import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.scss']
})
export class AgregarProductoModalComponent {
  producto: any = {
    nombre: '',
    descripcion: '',
    cantidad: 0
  };

  constructor(private dialogRef: MatDialogRef<AgregarProductoModalComponent>) {}

  agregarProducto(): void {
    // Validar el formulario antes de agregar el producto
    if (this.producto.nombre && this.producto.descripcion && this.producto.cantidad > 0) {
      // Lógica para agregar el producto
      this.dialogRef.close('agregar');
    }
  }

  cancelar(): void {
    // Cerrar el modal sin agregar el producto
    this.dialogRef.close();
  }
}
