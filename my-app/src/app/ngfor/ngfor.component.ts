import { Component, OnInit } from '@angular/core';
import { DependencyService } from '../dependency.service';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  users:any;
  constructor(private service:DependencyService) { }

  ngOnInit(): void {
    this.users=this.service.getusers();
  }

}
