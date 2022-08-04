import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers:any = [];

  constructor(
    private users: UsersService
  ) { 
    this.viewUsers();
  }

  ngOnInit(): void {
  }

  viewUsers() {
    return this.users.getUsers().subscribe((resp) => {
      this.listUsers = resp;
      console.log(this.listUsers);
    })
  }

}
