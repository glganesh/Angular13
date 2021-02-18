import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RoutingparamsService } from '../services/routingparams.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private service: RoutingparamsService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.service.getuserbyid(id).subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

}
