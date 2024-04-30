import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updateProductForm!: FormGroup; // Use the definite assignment assertion here
  productId!: number; // Use the definite assignment assertion here

  constructor(private route: ActivatedRoute, private dataService: DataService , private router : Router) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')!; // Use the non-null assertion operator here
    this.updateProductForm = new FormGroup({
      'id': new FormControl(this.productId), // Include the productId as a hidden form control
      'productName': new FormControl(null, Validators.required),
      'productDescription': new FormControl(null, Validators.required),
      'productCategory': new FormControl(null, Validators.required),
      'productStock': new FormControl(null, [Validators.required, Validators.min(0)]),
      'productPrice': new FormControl(null, [Validators.required, Validators.min(0)])
    });

    // Fetch the product details here and set the form values
    this.dataService.getProductById(this.productId).subscribe(product => {
      this.updateProductForm.setValue({
        id: product.id,
        productName: product.productName,
        productDescription: product.productDescription,
        productCategory: product.productCategory,
        productStock: product.productStock,
        productPrice: product.productPrice
      });
    });
  }

  async onSubmit() {
    if (this.updateProductForm.valid) {
      const product = this.updateProductForm.value;
      try {
        const response = await this.dataService.updateProduct(product).toPromise();
        console.log('Product updated successfully', response);
        this.router.navigate(['/marketplace']);

        // Handle success, e.g., show a success message or navigate to another page
      } catch (error) {
        console.error('Error updating product', error);
        // Handle error, e.g., show an error message
      }
    } else {
      console.log('Form is not valid');
      // Optionally, you can highlight invalid fields
    }
  }
}
