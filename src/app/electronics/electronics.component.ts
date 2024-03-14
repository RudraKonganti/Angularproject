import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements AfterViewInit{
  
  Electronics:any=[];
  constructor(private ps:ProductsService,private ar:ActivatedRoute,private cs:CartService){
    this.ar.queryParamMap.subscribe((qparams)=>{
      let category=qparams.get('category')
      if(category){
      this.Electronics= this.ps.Electronics.filter((p)=>{
          return  p.category==category
        })
      }
    })
  }

  ngAfterViewInit(): void {
    this.ps.rs.subscribe((data)=>{  
    this.Electronics=data;
    })
  }

  addtocart(e:any){    
    this.cs.addtocart(e)
  }

  remove(e:any){
    this.cs.remove(e)
  }
}

