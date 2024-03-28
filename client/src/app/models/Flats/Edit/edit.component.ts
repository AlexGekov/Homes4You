import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EditService } from "./edit.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { environment } from "src/app/enviroments/enviroments";
import { Flat } from "src/app/types/flat";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-Eearch",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.css"]
})

export class EditComponent {
    id: string = ''
    flat: any
    constructor(private flatService: EditService, private router: Router, private activeRoute: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(data => { this.id = data['postId'] })
        this.http.get(`${environment.apiUrl}/posts/catalog/${this.id}/details`).subscribe((flat) => { this.flat = flat as Flat })
    }

    edit(form: NgForm): void {
        if (form.valid) {
            const { name, kind, description, year, image } = form.value
            this.flatService.edit(name, kind, description, Number(year), image, this.id).subscribe(() => this.router.navigate(['/catalog']))
        }
    }

}