import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../models/User/user.service';

export const authGuard: CanActivateFn = () => {
    const userService = inject(UserService)
    const router = inject(Router)

    return userService.isLoggedIn ? false : router.navigate(['/login'])
};