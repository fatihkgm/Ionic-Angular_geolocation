export class LocationPlaces {
  public places: { city: string }[];

  addPlace(place: {city:string}) {
    this.places.push(place);
  }

  getPlaces() {
    return this.places.slice();
  }
}
