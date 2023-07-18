import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { login } from '../interfaces/login.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { logedUser } from '../interfaces/logedUser.iinterface';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AurhService {

  loggedId = new BehaviorSubject<boolean>(false);

  userId: number;

  userData = new BehaviorSubject<logedUser>(null);

  url = environment.apiBaseUrl;

  constructor(private http: HttpClient,private router:Router) { }

  register(user:user) {
    return this.http.post(`${this.url}/api/users/create`, {
      ...user
    });
  }

  login(correo_electronico, password) {
    return this.http.post(`${this.url}/api/users/login`, {
      correo_electronico,
      password,
    }).pipe(
      map((res: login) => {
        this.saveToken(res.user.token);
        this.loggedId.next(true);
        return res;
      })
    );
  }

  getUser(id) {
    return this.http.get(`${this.url}/api/users/get/${id}`);
  }

  verificarUsuario(id,token){
    return this.http.get(`${this.url}/api/users/get/${id}`).pipe(
      map((res: logedUser) => {
        if(res.token == token)
        {
          this.userData.next(res);
          this.saveToken(res.token);
          this.loggedId.next(true);
          return true;
        }
        this.router.navigate(['/login']);
        return false
      })
    );
  }

  get isLogged(): Observable<boolean>{
    return this.loggedId.asObservable();
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(helper.decodeToken(token)));
    this.userId = JSON.parse(localStorage.getItem('user')).usuario_id;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedId.next(false);
    // set userIsLogged = false
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    if(isExpired) {
      this.logout();
    } else {
      this.loggedId.next(true);
    }
  }

}
