import { Component } from '@angular/core';
import { ProfileService } from '../services/profile-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(private profileService: ProfileService){}

  

}
