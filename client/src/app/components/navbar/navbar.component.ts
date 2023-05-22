import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  onNavigate(){
    window.location.href="https://github.com/quinise/rollerderbyapi";
  }
}
