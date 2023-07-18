import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventarioService } from 'src/app/home/services/inventario.service';

@Component({
  selector: 'app-compartir-inventario',
  templateUrl: './compartir-inventario.component.html',
  styleUrls: ['./compartir-inventario.component.scss']
})
export class CompartirInventarioComponent {

  producto: any = {
    id: "",
  };

  constructor(
    private dialogRef: MatDialogRef<CompartirInventarioComponent>,
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
    if (this.producto.id) {
      this.inventarioService.compartirInventario(this.data.id,this.producto.id).subscribe(
        (res) => {
          this.snackBar.open('Inventario Compartido', 'Cerrar', {});
          this.dialogRef.close('agregar');
        },
        (err) => {
          this.snackBar.open('Error al compartir el inventario', 'Cerrar', {});
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
