import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule,MatSidenav,MatSidenavContent,MatSidenavContainer,} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbar,MatToolbarModule,MatToolbarRow,} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule,} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,MatIconModule,
    MatSidenavModule,MatTableModule,
    MatBadgeModule,MatCheckboxModule,
    MatToolbar,MatToolbarModule,MatToolbarRow,
    MatCardModule,
    MatSidenav,MatSidenavContent,MatSidenavContainer,
    
  ],
  exports:[

    MatButtonModule,MatIconModule,
    MatSidenavModule,MatTableModule,
    MatBadgeModule,MatCheckboxModule,
    MatToolbar,MatToolbarModule,MatToolbarRow,
    MatSelectModule,
    MatCardModule,
    MatSidenav,MatSidenavContent,MatSidenavContainer,

  ]
})
export class ModuleImportsModule { }
