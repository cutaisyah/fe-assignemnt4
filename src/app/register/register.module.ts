import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
