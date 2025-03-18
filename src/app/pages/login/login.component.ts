import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = { email: '', password: '' };
  errorMessage = '';
  successMessage = '';

  onSubmit() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Checking if email is valid
    if (!emailPattern.test(this.user.email)) {
      this.errorMessage = 'Enter a valid email address';
      this.successMessage = '';
      return;
    }

    // Check if password is entered
    if (!this.user.password) {
      this.errorMessage = 'Password is required';
      this.successMessage = '';
      return;
    }

    // If everything is correct
    this.successMessage = 'Login successful!';
    this.errorMessage = '';
  }
}