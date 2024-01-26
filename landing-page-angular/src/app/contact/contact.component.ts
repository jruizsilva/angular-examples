import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent implements OnInit {
  _formBuilder = inject(FormBuilder);
  contactForm = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    dni: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
  });
  usuarioActivo = { name: 'Pedro', surname: 'perez', dni: '321521515' };

  ngOnInit(): void {
    this.contactForm.patchValue({
      name: this.usuarioActivo.name,
      surname: this.usuarioActivo.surname,
      dni: this.usuarioActivo.dni,
    });
    this.contactForm.get('name')?.disable();
    this.contactForm.get('surname')?.disable();
    this.contactForm.get('dni')?.disable();
  }

  submitForm() {
    console.log(this.contactForm);
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.contactForm.get(controlName)?.hasError(errorType) &&
      this.contactForm.get(controlName)?.touched
    );
  }
}
