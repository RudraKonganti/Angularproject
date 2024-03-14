import { Component, OnInit, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder,private ps:ProductsService) {}
 
    regForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      image: [null, Validators.required],
      price: ['', Validators.required],
      category: ['', [Validators.required],this.validCategory]
    });

validCategory(input):Promise<any>{
  let categories=['laptops','mobiles','tv'];
 let user=input.value;
 let response=new Promise((resolve,reject)=>{
  if(categories.indexOf(user)>=0){
    resolve(null)
  }
 else{
  resolve({'duplicated':true})
 }
 })
  return response;
}
 
 submit(item){ 
  this.ps.addToList(item.value)
 }


}


