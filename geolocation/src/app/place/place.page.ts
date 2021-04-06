import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  goBack() {
    this.router.navigate(['home']);
  }
}
