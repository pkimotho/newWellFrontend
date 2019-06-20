import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  domain = 'http://192.168.0.103:3000/artist';
  options;
  token;

  constructor(private http: Http) { }

  // createAuthenticationHeaders() {
  //   this.options = new RequestOptions({
  //     headers: new Headers({
  //       'Content-Type': 'application/json', // Format set to JSON
  //     })
  //   });
  // }

  registerArtist(artist) {
    const options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json' // Format set to JSON
      })
    });
    return this.http.post(this.domain + '/new', artist, options).subscribe(() => {
      console.log('Posted');
    });
  }
  loginArtist(artist) {
    const options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json' // Format set to JSON
      })
    });
    return this.http.post(this.domain + '/login', artist, options).subscribe((res) => {
      const { token } = res.json();
      localStorage.setItem('artistToken', token);
    });
  }


}
