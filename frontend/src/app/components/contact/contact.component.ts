import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com'; // Import EmailJS
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Send the form data to the backend server
      this.sendEmail(formData);
    }
  }

  // Function to send email by making a POST request to the backend API
  sendEmail(formData: any): void {
    this.http
      .post('https://www.africsahara.com/send-email', formData) // Update to the production URL
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Thank you for contacting us!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Something went wrong. Please try again.');
        }
      );
  }
}