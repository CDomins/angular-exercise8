import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.profileForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      isActive: ['', [Validators.required]],
    });
  }

  onSubmit = () => {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  };
}
