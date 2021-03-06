import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req, next){
   const tokenRequest =  req.clone({
      setHeaders: {
        Authorization: `Bearer  ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenRequest);
  }

}
