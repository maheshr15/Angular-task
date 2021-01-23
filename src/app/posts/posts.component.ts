import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../users/user-service.service';
import { Users } from '../users/users';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  users: Array<any>;
  

  constructor(private http: UserServiceService,
    private route: ActivatedRoute) { }

  getData(){
    const id =+ this.route.snapshot.paramMap.get('id');
      this.http.getDatabyId(id).subscribe((data )=>{this.users = [data];});
  }

  ngOnInit(): void {
    this.getData();
  }

}
