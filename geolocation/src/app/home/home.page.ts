import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationPlaces } from 'src/location/places.location';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router,public locationPlaces: LocationPlaces) {

  }

  go() {
    this.router.navigate(['place']);
  }

}
