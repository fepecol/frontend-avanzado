import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  @Output() sidenavClose = new EventEmitter();
  events: string[] = [];
  opened: boolean;
  constructor() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
