import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { AurhService } from 'src/app/auth/services/aurh.service';
import { logedUser } from 'src/app/auth/interfaces/logedUser.iinterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sidenavOpened = this.homeService.sidenavOpened

  nombreUsuario = 'Usuario';

  constructor(
    private homeService: HomeService,
    public authService: AurhService
  ) { }

  ngOnInit(): void {
    this.authService.userData.subscribe((value: logedUser) => {
      this.nombreUsuario = value.nombre_usuario;
    });
  }

  toggleSidenav(): void {
    this.sidenavOpened.next(!this.sidenavOpened.value);
  }

}
