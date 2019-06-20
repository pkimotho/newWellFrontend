import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './../../services/artists.service';
import { AuthorizationService } from './../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  artists$;
  artist = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }
  login() {
    this.authService.loginArtist(this.artist);
    console.log(this.artist);
  }


}
