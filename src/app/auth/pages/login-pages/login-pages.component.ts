import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html'
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router:Router
    ) {}

  onLogin():void{
    this.authService.login('germancastro40@hotmail.com', '123456789')
    .subscribe( user =>{
      // if(!user) throw Error('User is required')
      this.router.navigate(['/'])
    })
  }
}
