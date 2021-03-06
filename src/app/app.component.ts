import { Component } from '@angular/core';
import { TokenStorageService } from './services/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11jwtauth';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {

     //this.isLoggedIn = !this.tokenStorageService.getToken();
     this.isLoggedIn = true;
     if (this.isLoggedIn){
       const user = this.tokenStorageService.getUser();
       this.roles = user.roles;

       //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
       //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
       this.username = user.username;

     }


  }

  logout(): void{
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    window.location.reload();
  }

}
