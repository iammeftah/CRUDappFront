import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Viewer } from './viewer.model' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api/products';
  private viewerUrl = 'http://localhost:8080/api/viewers';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Adjusted to send a JSON object
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


  getViewerById(id: number): Observable<Viewer> {
    return this.http.get<Viewer>(`${this.viewerUrl}/${id}`);
  }

  // Adjusted to send a JSON object
  createViewer(viewer: Viewer): Observable<Viewer> {
    return this.http.post<Viewer>(`${this.viewerUrl}`, viewer);
  }

  updateViewer(viewer: Viewer): Observable<Viewer> {
    return this.http.put<Viewer>(`${this.viewerUrl}/${viewer.id}`, viewer);
  }

  deleteViewer(id: number): Observable<any> {
    return this.http.delete(`${this.viewerUrl}/${id}`);
  }

}
