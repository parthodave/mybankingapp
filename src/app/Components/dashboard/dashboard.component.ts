import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Welcome, {{auth.currentuser()?.username}}</h2>
    <nav>
      <a routerLink="/users">Users</a> |
      <a routerLink="/cash-order">Cash Order</a> |
      <a routerLink="/vault-reconciliation">Vault Reconciliation</a> |
      <button (click)="logout()">Logout</button>
    </nav>
  `
})
export class DashboardComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
