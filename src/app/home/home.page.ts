import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url = 'http://192.168.1.4:3089/acreditar'

  constructor( private http: HttpClient,
               private httpService: HttpService ) {}

  estandar() {
    this.http.get( this.url )
      .subscribe( resp => {
        console.log('resp.estandar->',resp);
      });
  }

  community() {
    this.httpService.doGet( this.url )
      .subscribe( resp => {
        console.log('resp.community->',resp);
      });
  }

}
