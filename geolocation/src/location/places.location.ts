import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationPlaces {
  public places: { city: string }[] = [];

  constructor(public storage: Storage) {}

  addPlace(place: { city: string }) {
    this.places.push(place);
    this.storage.set('places', this.places);
  }

  getPlaces() {
    return this.storage.get('places').then((places) => {
      this.places = places == null ? [] : places;
      return this.places.slice();
    });
  }
}
