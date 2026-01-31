import { Component } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private profileService: ProfileService){};
  
  

}
