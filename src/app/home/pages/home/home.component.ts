import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sidenavOpened = this.homeService.sidenavOpened

  constructor(
    private homeService: HomeService
  ) { }

  toggleSidenav(): void {
    this.sidenavOpened.next(!this.sidenavOpened.value);
  }

}
