import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(public http:HttpClient) { }

  Sellerurl = 'http://localhost:3000/seller'

  sellerSignup(data: any)
  {
  //  console.log('Service called..')
  return this.http.post(this.Sellerurl , data)
  }
}

