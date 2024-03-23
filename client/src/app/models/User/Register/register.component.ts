import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
    selector: "app-Register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent {

    constructor(private userService: UserService, private router: Router) { }

    register(form: NgForm): void {
        if (form.valid) {
            const { email, username, passwords: { password, repeatPassword } } = form.value
            this.userService.register(email, username, password, repeatPassword).subscribe(() => this.router.navigate(['/']))
        }
    }
}