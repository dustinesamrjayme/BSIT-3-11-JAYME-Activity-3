import { Injectable } from '@angular/core';
import { Me } from '../attributes/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private me: Me = {
    id: 1,
    name: 'Dustine sam Jayme',
    username: 'dustine.sam',
    email: 'dustinejayme@gmail.com',
    address: 'Cavite, Philippines',
    image: 'assets/profile/me.png'
  };

  getMe(): Me {
    return this.me;
  }
}
