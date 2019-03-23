import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId: number;
  empresaId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.userId = params.userId);
    this.route.queryParams.subscribe(params => this.empresaId = params.empresaId);
  }

}
