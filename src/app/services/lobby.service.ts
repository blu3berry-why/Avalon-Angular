import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LobbyCode } from '../model/LobbyCode';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private http: HttpClient) { }

  createLobby( ){
    return this.http.post<LobbyCode>(environment.url + "lobby/create", {}).subscribe(res => console.log(res))
  }
}
