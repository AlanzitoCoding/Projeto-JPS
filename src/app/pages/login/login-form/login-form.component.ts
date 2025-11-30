// Louvado seja o Senhor

import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  apiService = inject(AuthService);
  router = inject(Router);

  login(form : NgForm){
    console.log(form.value.username);
    console.log(form.value.password);

    this.apiService.authLogin(form.value.username, form.value.password)
    .subscribe({
      next: (res) => {
        console.log(res);
        sessionStorage.setItem("user", JSON.stringify(res));
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
