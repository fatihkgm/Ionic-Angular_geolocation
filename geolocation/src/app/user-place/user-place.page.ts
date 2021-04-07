import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-user-place',
  templateUrl: './user-place.page.html',
  styleUrls: ['./user-place.page.scss'],
})
export class UserPlacePage {
  lat: number;
  lat: number;
  constructor(public controllarView: ViewController) {}

  ngOnInit() {}
  backOn() {
    this.controllarView;
  }
}
