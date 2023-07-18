import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/home/interfaces/producto.interface';
import { InventarioService } from 'src/app/home/services/inventario.service';

@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.scss']
})
export class AgregarProductoModalComponent implements OnInit {
  producto: any = {
    productId: 0,
    quantity: 0,
  };

  productId: number = 0;

  productos: Producto[] = [];

  constructor(
    private dialogRef: MatDialogRef<AgregarProductoModalComponent>,
    private inventarioService: InventarioService,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}


  ngOnInit(): void {
    console.log(this.data)
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

      this.inventarioService.addProductInv(this.data.id, this.producto.productId, this.producto.quantity).subscribe(
        (res: any) => {
          console.log(res);
          this.snack.open('Producto agregado', 'Aceptar', {
            duration: 2000
          });
          this.dialogRef.close('agregar');
        },
        (err: any) => {
          console.log(err);
          this.snack.open('Error al agregar el producto', 'Aceptar', {
            duration: 2000
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
