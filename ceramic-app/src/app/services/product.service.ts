import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly productCollectionRef = collection(
    this.firestore,
    'products'
  )

  constructor(
    private firestore: Firestore,
  ) {
    console.log(`I'm from environment prod: ${environment.production}`);
    console.log(`Firebase appip: ${environment.firebaseConfig.appId}`);
  }

  //*READ ALL
  getAllProduct(): Observable<ProductModel[]> {
    return from(getDocs(this.productCollectionRef)).pipe(
      map((snapshot) => {
        const resultList = snapshot.docs.map((doc) => {
          const productData: ProductModel = doc.data() as ProductModel;
          productData.id = doc.id;
          return productData;
        });
        return resultList;
      })
    )
  }
}
