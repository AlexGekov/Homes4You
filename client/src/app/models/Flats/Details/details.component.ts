import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Flat } from "src/app/types/flat";
import { environment } from "src/app/enviroments/enviroments";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { UserService } from "../../User/user.service";
import { DetailsService } from "./details.service";

@Component({
    selector: "app-Details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})

export class DetailsComponent implements OnInit {
    id: string = ''
    flat: any
    owner: any
    regex = /userId=([^;]+)/;

    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn
    }

    get isOwner(): boolean {
        return this.flat?.owner === this.owner[1]
    }

    get Wants(): boolean {
        return this.flat?.Watch.includes(this.owner[1])
    }

    constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private router: Router, private userService: UserService, private detailsService: DetailsService) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(data => { this.id = data['postId'] })
        this.http.get(`${environment.apiUrl}/posts/catalog/${this.id}/details`).subscribe((flat) => { this.flat = flat as Flat })
        this.owner = this.regex.exec(document.cookie)
    }

    delete(event: Event) {
        confirm("Do you want to delete this flat?")
        this.http.delete(`${environment.apiUrl}/posts/${this.id}/details`).subscribe(() => this.router.navigate(['/catalog']))
    }

    watch(event: Event) {
        this.detailsService.want(this.id, this.owner[1]).subscribe(() => this.router.navigate(['/catalog']))
    }
}