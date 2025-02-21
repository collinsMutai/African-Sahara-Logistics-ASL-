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

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  // Function to handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Sending the form data to EmailJS
      this.sendEmail(formData);
    }
  }

  // Send the email using EmailJS
  sendEmail(formData: any): void {
    const serviceId = environment.emailjs.serviceId; // Get the service ID from environment
    const templateId = environment.emailjs.templateId; // Get the template ID from environment
    const userId = environment.emailjs.userId; // Get the user ID from environment

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log('Email sent successfully:', response);
        alert('Thank you for contacting us!');
      },
      (error) => {
        console.error('Email sending error:', error);
        alert('Something went wrong. Please try again.');
      }
    );
  }
}