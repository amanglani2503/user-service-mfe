import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  user = { name: '', email: '', password: '', confirmPassword: '' };
  errorMessage = '';
  successMessage = '';

  onSubmit() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Check if email is valid
    if (!emailPattern.test(this.user.email)) {
      this.errorMessage = 'Enter a valid email address';
      this.successMessage = '';
      return;
    }

    // Check if passwords match
    if (this.user.password && this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      this.successMessage = '';
      return;
    }

    // If everything is correct
    this.successMessage = 'Profile updated successfully!';
    this.errorMessage = '';
  }
}