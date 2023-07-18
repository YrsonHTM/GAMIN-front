import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';
import { login } from '../../interfaces/login.interface';
import { AurhService } from '../../services/aurh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email?: string;
  password?: string;

  constructor(
    private router: Router,
    private homeService: AurhService,
    private snackBar: MatSnackBar
    ) {}

  login(): void {
    //verificarcion de usuario TODO
    // Simulación de registro exitoso
    // Redirigir al usuario a la página de inicio de sesión después de registrarse

    this.homeService.login(this.email, this.password).subscribe(
      (res: login) => {
        console.log(res)
        if(!res) return;
        this.snackBar.open('Bienvenido', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/home']);
      },
      (err) => {
        this.snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
          duration: 3000,
        });
      }
    );

    console.log(this.email, this.password)
  }
}
