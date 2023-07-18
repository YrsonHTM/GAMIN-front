import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { user } from 'src/app/auth/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  
  sidenavOpened = new BehaviorSubject<boolean>(true);

  url = environment.apiBaseUrl;
  
  constructor(
    private http: HttpClient,
    
    ) { }


  register(user:user) {
    return this.http.post(`${this.url}/api/users/create`, {
      ...user
    });
  }

  login(correo_electronico, password) {
    return this.http.post(`${this.url}/api/users/login`, {
      correo_electronico,
      password,
    });
  }


}
