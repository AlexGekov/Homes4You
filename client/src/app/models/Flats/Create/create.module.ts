import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CreateService } from "./create.service";
import { OnInit } from "@angular/core";

@Component({
    selector: "app-Create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.css"]
})

export class CreatePostsComponent implements OnInit {
    constructor(private flatService: CreateService, private router: Router) { }

    owner: any
    regex = /userId=([^;]+)/;


    
    ngOnInit() {
        this.owner = this.regex.exec(document.cookie)
        console.log(this.owner[1])
    }

    create(form: NgForm): void {
        if (form.valid) {
            const { name, kind, description, year, image } = form.value
            this.flatService.create(name, kind, description, Number(year), image, this.owner[1]).subscribe(() => this.router.navigate(['/catalog']))
        }
    }
}