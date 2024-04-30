import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(
      (products: Product[]) => {
        console.log('Fetched products:', products);
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }


  deleteProduct(id: number) {
    this.dataService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(product => product.id !== id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }


}
