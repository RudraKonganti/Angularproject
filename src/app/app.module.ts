import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HeaderComponent } from './header/header.component';
import { ProductsService } from './products.service';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule,MatSidenav,MatSidenavContent,MatSidenavContainer,} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbar,MatToolbarModule,MatToolbarRow,} from '@angular/material/toolbar';
import {MatFormField, MatSelectModule} from '@angular/material/select';
import {MatCardModule,} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {path:'',component:ElectronicsComponent, pathMatch:'full'},
  {path:"electronics",component:ElectronicsComponent},
  {path:"cart",component:CartComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",redirectTo:"/electronics"}

];


@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
    HeaderComponent,
    CartComponent,
    RegisterComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,MatIconModule,
    MatSidenavModule,MatTableModule,
    MatBadgeModule,MatCheckboxModule,
    MatToolbar,MatToolbarModule,MatToolbarRow,
    MatCardModule,MatFormField,
    MatSidenav,MatSidenavContent,MatSidenavContainer,
   ],
  providers: [
    ProductsService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
