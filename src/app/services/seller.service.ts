import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject} from 'rxjs'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)


  constructor(public http:HttpClient , private router:Router) { }

  Sellerurl = 'http://localhost:3000/seller'

  sellerSignup(data: any)
  {
  //  console.log('Service called..')
  return this.http.post(this.Sellerurl , data ,{observe: 'response'} ).subscribe((result : any)=>
  {
    this.isSellerLoggedIn.next(true)
    localStorage.setItem('seller',JSON.stringify(result.body))
    this.router.navigate(['seller-home'])
  })

  }
  reloadFunction()
  {
    if(localStorage.getItem('seller'))
    {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }

}

