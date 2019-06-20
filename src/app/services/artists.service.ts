import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: Http) { }

  getArtists() {
    return this.http.get('http://192.168.0.103:3000/artist');
  }

}
