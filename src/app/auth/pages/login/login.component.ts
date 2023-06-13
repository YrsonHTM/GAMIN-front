import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email?: string;
  password?: string;

  constructor(private router: Router) {}

  login(): void {
    //verificarcion de usuario TODO
    // Simulación de registro exitoso
    // Redirigir al usuario a la página de inicio de sesión después de registrarse
    console.log(this.email, this.password)
    this.router.navigate(['/home']);
  }
}
