import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/home/interfaces/producto.interface';
import { InventarioService } from 'src/app/home/services/inventario.service';

@Component({
  selector: 'app-editar-producto-modal',
  templateUrl: './editar-producto-modal.component.html',
  styleUrls: ['./editar-producto-modal.component.scss']
})
export class EditarProductoModalComponent {

  producto: any = {
    productId: 0,
    quantity: 0,
  };

  productId: number = 0;

  productos: Producto[] = [];

  constructor(
    private dialogRef: MatDialogRef<EditarProductoModalComponent>,
    private inventarioService: InventarioService,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}


  ngOnInit(): void {
    console.log(this.data);
    this.producto.quantity = this.data.cantidad_disponible;
    this.producto.productId = this.data.producto_id;
  }

  agregarProducto(): void {
    console.log(this.producto);
    // Validar el formulario antes de agregar el producto
    if (this.producto.productId && this.producto.quantity) {
      // Lógica para agregar el producto

      this.inventarioService.editarProdictoInv(this.data.inventario_producto_id,this.producto.quantity).subscribe(
        (res)=>{
          this.snack.open('Producto editado', 'Cerrar', {
            duration: 3000,
          });
          this.dialogRef.close('agregar');
        },
        (err)=>{
          this.snack.open('Error al editar el producto', 'Cerrar', {
            duration: 3000,
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
