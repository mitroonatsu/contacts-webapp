import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private contactHttpService: ContactHttpService) {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
}
