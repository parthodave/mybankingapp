import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./Components/login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard', canActivate: [AuthGuard], loadComponent: () => import('./Components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'users', canActivate: [AuthGuard], loadComponent: () => import('./Components/users/users.component').then(m => m.UsersComponent) },
  { path: 'cash-order', canActivate: [AuthGuard], loadComponent: () => import('./Components/cash-order/cash-order.component').then(m => m.CashOrderComponent) },
  { path: 'vault-reconciliation', canActivate: [AuthGuard], loadComponent: () => import('./Components/vaultrecon/vaultrecon.component').then(m => m.VaultreconComponent) },
  { path: '**', redirectTo: 'dashboard' }
];
