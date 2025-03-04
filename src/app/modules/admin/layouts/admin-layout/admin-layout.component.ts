import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../../shared/components/side-menu/side-menu.component";
import { GgcSideMenuComponent, TitleColor } from "ggc-side-menu"

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, RouterOutlet, SideMenuComponent, GgcSideMenuComponent],
  templateUrl: './admin-layout.component.html',
  styles: ``
})
export default class AdminLayoutComponent {

    isAuthenticated = signal(false);

    TitleColor = TitleColor;

    onLogin() {
      this.isAuthenticated.set(true);
    }

    onLogout() {
      this.isAuthenticated.set(false);
    }
}
