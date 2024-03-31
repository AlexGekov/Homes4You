import { Component, OnInit } from '@angular/core';
import { UserService } from '../../User/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: '/header.component.html',
    styleUrls: ['/header.component.css']
})
export class HeaderComponent implements OnInit {
    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn
    }

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        if (document.cookie.includes('userId=')) {
            this.userService.getUser().subscribe()
        }
    }


    logout(): void {
        this.userService.logout().subscribe()
        this.router.navigate(['/'])
    }

}