
import { Component, OnInit } from '@angular/core';
import { RoutingparamsService } from '../services/routingparams.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  // id: number;
  constructor(private service: RoutingparamsService) { }


  ngOnInit(): void {

    this.service.getusers()
      .subscribe
      (
        data => {
          this.users = data;
        }
      );

  }
}
