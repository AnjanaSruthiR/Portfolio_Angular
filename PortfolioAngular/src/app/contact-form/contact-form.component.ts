import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { trigger, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class ContactFormComponent {
  currentStep = 1;
  totalSteps = 4; // Updated to reflect the new total steps
  formData = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (
      this.currentStep === this.totalSteps &&
      (!this.formData.fullName ||
        !this.formData.email ||
        !this.formData.message)
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    this.contactService.submitContactForm(this.formData).subscribe(
      (response: any) => {
        alert('Message sent successfully!');
        this.resetForm();
        this.currentStep = 1; // Reset to the first step
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  }

  resetForm() {
    this.formData = {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  getProgressWidth(): string {
    const percentage = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
    return `${percentage}%`;
  }
}
