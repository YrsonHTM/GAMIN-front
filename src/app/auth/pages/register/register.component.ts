import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName?: string;
  email?: string;
  password?: string;

  constructor(private router: Router) {}

  register(): void {
    // Aquí puedes agregar la lógica de registro
    // Por ejemplo, puedes llamar a un servicio para crear una cuenta de usuario

    // Simulación de registro exitoso
    // Redirigir al usuario a la página de inicio de sesión después de registrarse
    this.router.navigate(['/login']);
  }
}
