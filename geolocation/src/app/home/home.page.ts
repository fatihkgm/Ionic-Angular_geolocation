import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationPlaces } from 'src/location/places.location';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  places: { city: string }[] = [];

  constructor(public router: Router, public locationPlaces: LocationPlaces) {}

  ionViewWillEnter() {
    this.places = this.locationPlaces.getPlaces();
  }

  go() {
    this.router.navigate(['place']);
  }
}
