import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { EmailDirective } from './Directives/email.directive';
import { PasswordDirective } from './Directives/pass.directive';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        EmailDirective,
        PasswordDirective,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class UserModule { }