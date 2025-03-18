import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = { id: '123', name: '', email: '', password: '' };
  errorMessage = '';
  successMessage = '';

  onSubmit() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.errorMessage = 'All fields are required!';
      this.successMessage = '';
    } else {
      this.successMessage = 'Profile updated successfully!';
      this.errorMessage = '';
    }
  }
}