import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/services/token-storage.service';
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      }, err => {
        this.content = JSON.parse(err.error).message;
      }

    );
  }

}
