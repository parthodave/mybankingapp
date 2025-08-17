import { inject } from "@angular/core";
import { CanActivate, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";


export const AuthGuard: CanActivateFn = () => 
{

    const auth = inject(AuthService);
    const router = inject(Router);
 
     if(auth.isAuthenticated())
     {
        return true
     }
     else
    {
        router.navigateByUrl('/login');
        return false;
     }
}