import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AgregarNuevoProductoComponent } from '../../../inventario/components/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { InventarioService } from 'src/app/home/services/inventario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/home/interfaces/producto.interface';
import { AurhService } from 'src/app/auth/services/aurh.service';

@Component({
  selector: 'app-agregar-provedor',
  templateUrl: './agregar-provedor.component.html',
  styleUrls: ['./agregar-provedor.component.scss']
})
export class AgregarProvedorComponent implements OnInit {

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
    private authService: AurhService
    ) {}
  ngOnInit(): void {
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


      this.inventarioService.createProvedor(this.provedor.nombre, this.provedor.descripcion, this.authService.userId, this.provedor.productId).subscribe(
        (res: any) => {
          this.snackBar.open('Provedor agregado correctamente', 'Cerrar', {
            duration: 3000
          });
          this.dialogRef.close(res);
        },
        (err: any) => {
          this.snackBar.open('Error al agregar el provedor', 'Cerrar', {
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
