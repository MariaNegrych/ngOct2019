import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  constructor(private httpClient: HttpClient, private dataService: DataService) {
  }

  getUserById(id) {

    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  }


  // canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //
  //
  //   const id = +activatedRouteSnapshot.params.id;
  //
  //
  //   if (id > 10) {
  //     return false;
  //   }
  //   return true;
  // }


  async canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const id = +activatedRouteSnapshot.params.id;
    console.log(id);
    const user = await this.getUserById(id).toPromise();
    if (Object.keys(user).length) {
      this.dataService.state.next(user);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }


}
