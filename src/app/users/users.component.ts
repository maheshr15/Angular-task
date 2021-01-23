import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipe } from 'ng2-search-filter';

import { UserServiceService} from './user-service.service';
import { Users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserServiceService) { }
  
  searchData: string;
  users : Users[] =[];

  getData() {
    return this.userService.getDataApi().subscribe(data => {
      this.users = data;})
  }
  
  
  ngOnInit(): void {
    this.getData();
  }

}
