import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {


  constructor(public sellerService: SellerService, public router: Router) { }

  ngOnInit() {
    this.sellerService.reloadFunction()
  }

  singUpForm(data: any) {
    // console.log(data)
    this.sellerService.sellerSignup(data)
  }
}
