import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  sidenavOpened = new BehaviorSubject<boolean>(true);
  constructor() { }
}
