import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private userService: UserService, private router: Router) { }

  canLoad(): Observable<boolean> | Promise<boolean> {
    return new Observable<boolean>(obs => {
      this.userService.isAdmin().subscribe((resp: any) => {
        if (resp.ok) {
          obs.next(true);
        } else {
          this.router.navigate(['/login']);
          obs.next(false)
        }
      })

    })
  }
}
