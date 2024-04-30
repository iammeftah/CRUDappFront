import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product = {} as Product; // Initialize with an empty object
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter();

  constructor(private dataService: DataService) { }

  onDelete(id: number) {
    this.dataService.deleteProduct(this.product.id).subscribe(
      () => {
        this.deleteProduct.emit(this.product.id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }



}
