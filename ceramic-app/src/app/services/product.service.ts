import { Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

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

  //*READ ONE
  // getCustomerWithGetDoc(id: string) {
  //   const productDoc = doc(this.firestore, ``)
  // }
}
