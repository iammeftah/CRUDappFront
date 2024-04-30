import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  loginForm!: FormGroup;
  viewer: any = {}; // Assuming the viewer object structure


  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'rating' : new FormControl(null , [Validators.min(0),Validators.max(5)]),
      'message': new FormControl(null, Validators.required)
    });
  }

  onRatingChange(value: number) {
    this.loginForm.get('rating')?.setValue(value, { emitEvent: false });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const viewer = this.loginForm.value;
      this.dataService.createViewer(viewer).subscribe(
        response => {
          console.log('Viewer added successfully', response);
          this.router.navigate(['/marketplace']);
        },
        error => {
          console.error('Error adding viewer', error);
        }
      );
    }
  }
}
