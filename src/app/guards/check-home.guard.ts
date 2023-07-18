import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AurhService } from '../auth/services/aurh.service';
import { logedUser } from '../auth/interfaces/logedUser.iinterface';

@Injectable({
  providedIn: 'root'
})
export class CheckHomeGuard implements CanActivate {

  constructor(private authService:AurhService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');
    if(!token) {
      this.authService.logout();
      return false;
    }
    const idUser = JSON.parse(localStorage.getItem('user')).usuario_id;

    return this.authService.verificarUsuario(idUser,token);
  }
  
}
