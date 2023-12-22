import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Repos, User} from "../user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(
    private service: ServiceService
  ) {
  }
  activeId:number=0;
  users:User[]=[];
  repositories:Repos[]=[];
  key:string = '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';
  ngOnInit() {
    this.service.getUsers(this.key).subscribe(res=> {
      this.users =res;
      console.log(this.users)
    });
  }
 repos(url:string, id:number){
    this.activeId=id;
   this.service.getRepos(this.key, url).subscribe(res=> {
     this.repositories =res;
     console.log(res)
   });
 }

}
