import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Message } from '../model/Message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  test(){
    console.log(environment.url + 'test')
    return this.http.get<Message>(environment.url + 'test')
  }
}
