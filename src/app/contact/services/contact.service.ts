import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact [];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Mitro', 'Onatsu'));
    this.contacts.push(new Contact(2, 'Muumi', 'Peikko'));
    this.contacts.push(new Contact(3, 'Pikku', 'Myy'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
