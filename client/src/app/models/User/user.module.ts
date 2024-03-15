import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule
    ]
})

export class UserModule { }