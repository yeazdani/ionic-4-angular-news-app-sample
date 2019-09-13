import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_Key = '85d94e447f864e7f9fbc554f69f20801';
  private url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=' + this.API_Key;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.url);
  }
}
