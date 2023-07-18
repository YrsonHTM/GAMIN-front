import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';
import { user } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName?: string;
  email?: string;
  password?: string;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private SnackBar: MatSnackBar
    ) {}

  register(): void {
    // Aquí puedes agregar la lógica de registro
    // Por ejemplo, puedes llamar a un servicio para crear una cuenta de usuario

    if(this.fullName && this.email && this.password){

      const user: user = {
        correo_electronico: this.email,
        descripcion_usuario: "",
        nombre_usuario: this.fullName,
        password: this.password,
        direccion: "",
        telefono: 0
      }

      this.homeService.register(user).subscribe(
        (res) => {
          console.log(res);
          if(!res) return;
          this.SnackBar.open('Usuario creado con éxito', 'Cerrar', {});
          // Simulación de registro exitoso
          // Redirigir al usuario a la página de inicio de sesión después de registrarse
          this.router.navigate(['/login']);
        },
        (err) => {
          this.SnackBar.open(err.error.error, 'Cerrar', {});
        }
      );

    }

    
  }
}
