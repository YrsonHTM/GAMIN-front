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
    this.producto.quantity = this.data.quantity;
    this.inventarioService.getAllProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        console.log(res)
      }
    );
  }

  agregarProducto(): void {
    console.log(this.producto);
    // Validar el formulario antes de agregar el producto
    if (this.producto.productId && this.producto.quantity) {
      // Lógica para agregar el producto

      

    }
  }

  cancelar(): void {
    // Cerrar el modal sin agregar el producto
    this.dialogRef.close();
  }

}
