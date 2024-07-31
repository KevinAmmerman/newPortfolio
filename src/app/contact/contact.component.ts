import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  message: string = 'Send message :)';
  contactForm: FormGroup;
  isSubmitted: boolean = false;
  isSent: boolean = false;
  checkboxValue: boolean = false;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      email: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      text: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      privacy: new FormControl(false),
    });
  }

  async onSubmit() {
    if (this.contactForm.valid && this.contactForm.get('privacy')?.value) {
      this.disableForm();
      try {
        const response = await fetch(
          'https://kevin-ammerman.com/send_mail/send_mail.php',
          {
            method: 'POST',
            body: this.setFormData(),
          }
        );
        this.resetAndNotify();
        this.isSent = true;
        if (response.ok) this.message = 'Success! :)';
      } catch (error) {
        console.error('Error sending message:', error);
        this.message = `Oops! Something went wrong`;
      }
    } else {
      this.showValidationErrorMsg();
    }
  }

  setFormData() {
    let fd = new FormData();
    fd.append('name', this.contactForm.value.name);
    fd.append('email', this.contactForm.value.email);
    fd.append('message', this.contactForm.value.text);
    return fd;
  }

  showValidationErrorMsg() {
    this.isSubmitted = true;
    setTimeout(() => (this.isSubmitted = false), 2000);
  }

  resetAndNotify() {
    setTimeout(() => {
      this.resetForm();
      this.enableForm();
      this.isSent = false;
    }, 5000);

    setTimeout(() => (this.message = 'Send message :)'), 12000);
  }

  resetForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      text: '',
      privacy: false,
    });
  }

  disableForm() {
    this.contactForm.disable();
  }

  enableForm() {
    this.contactForm.enable();
  }
}
