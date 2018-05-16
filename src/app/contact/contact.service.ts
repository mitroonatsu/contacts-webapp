import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact [];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Mitro', 'Onatsu'));
    this.contacts.push(new Contact('Muumi', 'Peikko'));
    this.contacts.push(new Contact('Pikku', 'Myy'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
