import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  getProfile(): Profile {
    
    const profile: Profile = {
      email: 'fbalanibarros@gmail.com',
      name: 'Fabricio Balani',
      whatsApp: 'https://api.whatsapp.com/send?phone=5567992566216&text=Ol%C3%A1,%20estou%20no%20seu%20site%20e%20gostaria%20d%20emais%20informa%C3%A7%C3%B5es.',
      linkedin:'https://www.linkedin.com/in/fabr%C3%ADcio-balani-b7a51b21a/'       
    }
    
    return profile;
  }
  
}
