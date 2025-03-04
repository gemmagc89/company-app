import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  isAuthenticated = input(false);

  onSignOut = output();
  onSignIn = output();
}
