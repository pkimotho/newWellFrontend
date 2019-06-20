import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './../../services/authorization.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  artist = {
    name: '',
    genre: 'ChristianGospel',
    email: '',
    password: ''
  };

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  registerArtist() {
    this.authService.registerArtist(this.artist);
    console.log(this.artist);
  }

}
