import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements AfterViewInit {

electronics:any[]

constructor(private cs:CartService){}

ngAfterViewInit(): void {
  this.cs.bs.subscribe((data)=>{
    this.electronics=data
    
  })

  
}

remove(p:number){
  this.cs.remove(p)
}

}
