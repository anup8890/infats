import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable()
export class ProductService {
    createProduct(product: Product){
        console.log("Product Name: "+product.productName)
    }
}