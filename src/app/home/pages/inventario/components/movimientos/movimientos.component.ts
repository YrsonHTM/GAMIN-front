import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Movimientos } from 'src/app/home/interfaces/movimientos.interface';
import { InventarioService } from 'src/app/home/services/inventario.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  movimientos : Movimientos[] = [];

  constructor(
    private dialogRef: MatDialogRef<MovimientosComponent>,
    private inventarioService: InventarioService,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit(): void {
    this.inventarioService.getMovimientos(this.data.id).subscribe((res: any) => {
      this.movimientos = res;
      console.log(this.movimientos);
    });
  }

  cancelar(): void {
    // Cerrar el modal sin agregar el producto
    this.dialogRef.close();
  }

}
