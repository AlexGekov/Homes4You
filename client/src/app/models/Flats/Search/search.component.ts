import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { environment } from "src/app/enviroments/enviroments";
import { HttpClient } from "@angular/common/http";
import { Flat } from "src/app/types/flat";

@Component({
    selector: "app-Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})

export class SearchComponent implements OnInit {
    flats: Flat[] | null = []

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(`${environment.apiUrl}/posts/catalog`).subscribe((flats) => this.flats = flats as Flat[])
    }
}