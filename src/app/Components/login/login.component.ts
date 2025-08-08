import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  authService  = inject(AuthService);
  router = inject(Router);
  error = '';
  login(){
    if(this.authService.login(this.username, this.password)){
      this.router.navigateByUrl('/dashboard');
    }
    else{
      this.error = "Invalid Credentials";
    }
  }
}
