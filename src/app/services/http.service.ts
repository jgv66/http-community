import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {}

  doGet( url:any ) {
    const options = {
      url
    };
    return from( Http.get(options) )
  }

}
