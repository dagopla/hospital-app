import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { UserService } from "../services/user.service";

export const canAuthActive:CanActivateFn=( route:ActivatedRouteSnapshot):Observable<boolean>=>{
    const router:Router=inject(Router);
    return inject(UserService).validateToken()
    .pipe(
        tap(valid=>{
            if(!valid){
                localStorage.clear();
                router.navigateByUrl('/auth/login');
            }
        })
    );
}