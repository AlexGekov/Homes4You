import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../models/User/user.service';

export const authGuard: CanActivateFn = () => {
    const userService = inject(UserService)
    const router = inject(Router)

    return userService.isLoggedIn ? true : router.navigate(['/login'])
};

export const revAuthGuard: CanActivateFn = () => {
    const userService = inject(UserService)
    const router = inject(Router)
    const regex = /userId=([^;]+)/;
    const Id = regex.test(document.cookie)

    return userService.isLoggedIn ? false : router.navigate(['/'])
};