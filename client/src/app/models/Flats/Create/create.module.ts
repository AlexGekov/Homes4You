import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CreateService } from "./create.service";

@Component({
    selector: "app-Create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.css"]
})

export class CreatePostsComponent {
    constructor(private flatService: CreateService, private router: Router) { }

    create(form: NgForm): void {
        if (form.valid) {
            const { name, kind, description, year, image} = form.value
            this.flatService.create(name, kind, description, year, image).subscribe(() => this.router.navigate(['/search']))
        }
    }
}