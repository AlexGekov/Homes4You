import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
    selector: "app-Login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {

    constructor(private userService: UserService, private router: Router) { }

    login(form: NgForm): void {
        if (form.valid) {
            const { email, password } = form.value
            this.userService.login(email, password).subscribe(() => this.router.navigate(['/catalog']))
        }
    }
}