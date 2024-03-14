import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:any=[];
 bs=new BehaviorSubject(this.cartItems);
 
  constructor() { 

  }
 
  addtocart(product:any){
   this.cartItems.push(product);
  }


  remove(pr:number){
    this.cartItems.splice(pr,1);
  }
 

}
