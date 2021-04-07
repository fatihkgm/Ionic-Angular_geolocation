import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LocationPlaces } from 'src/location/places.location';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  places: { city: string }[] = [];

  constructor(
    public router: Router,
    public locationPlaces: LocationPlaces,
    public contralMdl: ModalController
  ) {}

  ionViewWillEnter() {
    this.locationPlaces.getPlaces().then((places) => (this.places = places));
  }

  go() {
    this.router.navigate(['place']);
  }
  onOpenPlace() {
    this.router.navigate(['user-place']);
  }
  
}
