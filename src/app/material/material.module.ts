import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const materialmod=[MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule,MatStepperModule,MatToolbarModule,MatSidenavModule,MatListModule];



@NgModule({
  declarations: [],
  imports: [
   materialmod,
  ],
  exports: [
   materialmod,
  ]
})
export class MaterialModule { }
