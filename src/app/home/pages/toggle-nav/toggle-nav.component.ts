import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-toggle-nav',
  templateUrl: './toggle-nav.component.html',
  styleUrls: ['./toggle-nav.component.scss']
})
export class ToggleNavComponent {

  sidenavOpened = this.homeService.sidenavOpened

  constructor(
    private homeService: HomeService
  ) { }

  toggleSidenav(): void {
    this.sidenavOpened.next(!this.sidenavOpened.value);
  }

}
