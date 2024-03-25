import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Flat } from "src/app/types/flat";
import { environment } from "src/app/enviroments/enviroments";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-Details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})

export class DetailsComponent implements OnInit {
    id: string = ''
    flat: Flat | undefined
    isLoading: boolean = true;

    constructor(private http: HttpClient, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(data => { this.id = data['postId'] })
        this.http.get(`${environment.apiUrl}/posts/catalog/${this.id}/details`).subscribe((flat) => {this.flat = flat as Flat})
    }
}