import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './services/seller.service';

@Injectable({
  providedIn: 'root',
})
export class SellerAuthGuard implements CanActivate {

  constructor(private sellerService: SellerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (localStorage.getItem('seller')) {
      return true
    }
    return this.sellerService.isSellerLoggedIn.value;
  }
}
