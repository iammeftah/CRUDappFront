import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup; // Use the definite assignment assertion here

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      'productName': new FormControl(null, Validators.required),
      'productDescription': new FormControl(null, Validators.required),
      'productCategory': new FormControl(null, Validators.required),
      'productStock': new FormControl(null, [Validators.required, Validators.min(0)]),
      'productPrice': new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    console.log('onSubmit triggered');
    if (this.addProductForm.valid) {
      console.log('Valid form')
      const product = this.addProductForm.value;
      this.dataService.createProduct(product).subscribe(
        response => {
          console.log('Product added successfully', response);
          this.router.navigate(['/marketplace']);
          // Handle success, e.g., show a success message or navigate to another page
        },
        error => {
          console.error('Error adding product', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
}
