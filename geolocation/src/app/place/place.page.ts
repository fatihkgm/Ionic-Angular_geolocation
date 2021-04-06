import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationPlaces } from 'src/location/places.location';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  constructor(public router: Router, public locationPlaces: LocationPlaces) {}

  ngOnInit() {}
  goBack() {
    this.router.navigate(['home']);
  }

  onAddPlace(value: { city: string }) {
    this.locationPlaces.addPlace(value);
  }
}
